import 
{ start_add_expense, 
    add_expense, 
    edit_expense, 
    start_edit_expense,
    remove_expense, 
    start_remove_expense, 
    set_expenses, 
    start_set_expenses 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const uid = 'testUID'
const defaultAuthState = { auth: { uid: uid }};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, dueDate }) => {
        expensesData[id] = { description, note, amount, dueDate };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test(`should setup remove expense action object`, () => {
    const action = remove_expense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    store.dispatch(start_remove_expense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should setup edit expense action object', () => {
    const action = edit_expense('321cba', { note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '321cba',
        updates: { 
            note: 'New note value' 
        }
    });
});

test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: expenses[0].description,
        note: expenses[0].amount,
        amount: expenses[0].amount,
        dueDate: expenses[0].dueDate
    };
    const expenseId = expenses[0].id;
    const updates = {
        description: 'candy',
        note: 'trident'
    };
    store.dispatch(start_edit_expense(expenseId, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenseId,
            updates: updates
        });
        return database.ref(`users/${uid}/expenses/${expenseId}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            ...expenseData,
            ...updates
        });
        done();
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = expenses[2];
    const action = add_expense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenseData
    });
});
test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        note: 'This one is better',
        amount: 3000,
        dueDate: 1000
    };
    store.dispatch(start_add_expense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});
test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        dueDate: 0
    };
    store.dispatch(start_add_expense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should set up set expense action object with data', () => {
    const action = set_expenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(start_set_expenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: expenses
        });
        done();
    });
});

