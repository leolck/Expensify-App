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

test('should change state after remove expense button clicks', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.state('confirmRemove')).toBe(true);
});

test('should handle start_remove_expense', () => {
    wrapper.find('RemoveModal').prop('onConfirmRemove');
    expect(wrapper.state('confirmRemove')).toBe(false);
    expect(start_remove_expense).toHaveBeenLastCalledWith({
        id: expenses[0].id
    });
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should change state to false after user denies remove expense button', () => {
    wrapper.find('RemoveModal').prop('onDenyRemove');
    expect(wrapper.state('confirmRemove')).toBe(false);
});

