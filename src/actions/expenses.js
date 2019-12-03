import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const add_expense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense: expense
});

// asynchronous action for add
export const start_add_expense = (
    {
        description = '', note = '', amount = 0, createdAt = 0
    } = {}
) => {
    return (dispatch) => {
        const expense = { description, note, amount, createdAt }
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(add_expense({
                id: ref.key,
                ...expense
            })); 
        });
    };  
};

// REMOVE_EXPENSE 
export const remove_expense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

// asynchronous action for remove
export const start_remove_expense = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(remove_expense({ id }))
        });
    };
};
// EDIT_EXPENSE
export const edit_expense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
});

// SET_EXPENSES
export const set_expenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses: expenses
});

export const start_set_expenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(set_expenses(expenses));
        });
    };
};