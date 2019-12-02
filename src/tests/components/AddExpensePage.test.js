import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let start_add_expense, history, wrapper;

beforeEach(() => {
    start_add_expense = jest.fn();
    history = {
        push: jest.fn()
    };
    wrapper = shallow(<AddExpensePage start_add_expense={start_add_expense} history={history} />);
});

test('should render AddExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(start_add_expense).toHaveBeenLastCalledWith(expenses[1]);
});