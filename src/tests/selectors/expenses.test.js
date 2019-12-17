import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        orderBy: 'high',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1]]);
});

test('should filter by start date from new to old', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        orderBy: 'high',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0]]);
});

test('should filter by start date from old to new', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        orderBy: 'low',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[2] ]);
});

test('should filter by end date from new to old', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        orderBy: 'high',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('should filter by end date from old to new', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        orderBy: 'low',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1], expenses[0] ]);
});

test('should sort by date new to old', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        orderBy: 'high',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('should sort by date old to new', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        orderBy: 'low',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1], expenses[0], expenses[2] ]);
});

test('should sort by amount high to low', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        orderBy: 'high',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});

test('should sort by amount low to high', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        orderBy: 'low',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[2], expenses[1] ]);
});
