import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let set_text_filter, sort_by_date, sort_by_amount, set_start_date, set_end_date, wrapper;

beforeEach(() => {
    set_text_filter = jest.fn();
    sort_by_date = jest.fn();
    sort_by_amount = jest.fn();
    set_start_date = jest.fn();
    set_end_date = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            set_text_filter={set_text_filter}
            sort_by_date={sort_by_date}
            sort_by_amount={sort_by_amount}
            set_start_date={set_start_date}
            set_end_date={set_end_date}
        />
    );
});

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = altFilters.text;
    wrapper.find('input').simulate('change', {
        target: {
            value: value
        }
    });
    expect(set_text_filter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: {
            value: value
        }
    });
    expect(sort_by_date).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {
            value: value
        }
    });
    expect(sort_by_amount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = altFilters.startDate;
    const endDate = altFilters.endDate;
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: startDate,
        endDate: endDate
    });
    expect(set_start_date).toHaveBeenLastCalledWith(startDate);
    expect(set_end_date).toHaveBeenLastCalledWith(endDate);
});

test('should handle data focus changes', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')(null);
    expect(wrapper.state('calendarFocused')).toBe(null);
});