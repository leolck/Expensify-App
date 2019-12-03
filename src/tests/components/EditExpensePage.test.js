import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let start_edit_expense, start_remove_expense, history, wrapper;

beforeEach(() => {
    start_edit_expense =  jest.fn(),
    start_remove_expense = jest.fn(),
    history = {
        push: jest.fn()
    };
    wrapper = shallow(
        <EditExpensePage 
        expense={expenses[0]} 
        start_edit_expense={start_edit_expense} 
        history={history} 
        start_remove_expense={start_remove_expense}
        />
    );
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle start_edit_expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(start_edit_expense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle start_remove_expense', () => {
    wrapper.find('button').simulate('click');
    expect(start_remove_expense).toHaveBeenLastCalledWith({
        id: expenses[0].id
    });
    expect(history.push).toHaveBeenLastCalledWith('/');
});


