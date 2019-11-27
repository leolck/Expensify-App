import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let add_expense, history, wrapper;

beforeEach(() => {
    add_expense = jest.fn();
    history = {
        push: jest.fn()
    };
    wrapper = shallow(<AddExpensePage add_expense={add_expense} history={history} />);
});

test('should render AddExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(add_expense).toHaveBeenLastCalledWith(expenses[1]);
});