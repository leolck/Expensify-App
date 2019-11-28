import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

test('should list out 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should list out 2 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={235324}/>);
    expect(wrapper).toMatchSnapshot();
});