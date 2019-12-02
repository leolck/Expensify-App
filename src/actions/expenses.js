import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const add_expense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense: expense
});

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
// EDIT_EXPENSE
export const edit_expense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
});