import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let edit_expense, remove_expense, history, wrapper;

beforeEach(() => {
    edit_expense =  jest.fn(),
    remove_expense = jest.fn(),
    history = {
        push: jest.fn()
    };
    wrapper = shallow(
        <EditExpensePage 
        expense={expenses[0]} 
        edit_expense={edit_expense} 
        history={history} 
        remove_expense={remove_expense}
        />
    );
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit_expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(edit_expense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove_expense', () => {
    wrapper.find('button').simulate('click');
    expect(remove_expense).toHaveBeenLastCalledWith({
        id: expenses[0].id
    });
    expect(history.push).toHaveBeenLastCalledWith('/');
});


