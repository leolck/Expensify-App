import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const newExpense = {
        id: '4',
        description: 'xbox',
        note: 'controller',
        amount: 7000,
        dueDate: 5000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should edit expense with given id', () => {
    const note = 'hubba bubba'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note: note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(note);
});

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note: 'hubba bubba'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses for an empty state', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: expenses
    };
    const state = expensesReducer(undefined, action);
    expect(state).toEqual(expenses);
}); 

test('should set expenses for non-empty state', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: expenses[1]
    };
    const state = expensesReducer([expenses[0], expenses[1]], action);
    expect(state).toEqual(expenses[1]);
});