import { start_add_expense, add_expense, edit_expense, remove_expense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);


test(`should setup remove expense action object`, () => {
    const action = remove_expense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
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

test('should setup add expense action object with provided values', () => {
    const expenseData = expenses[2];
    const action = add_expense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenseData
    });
});
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        note: 'This one is better',
        amount: 3000,
        createdAt: 1000
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
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});
test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
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
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

// test('should setup add expense action object with default values', () => {
//     const expenseData = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     }
//     const action = add_expense(expenseData);
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     });
// });