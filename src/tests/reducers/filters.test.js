import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        orderBy: 'high',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should setup sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        orderBy: 'high',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should setup set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    };
    const state = filtersReducer(undefined,  action);
    expect(state.text).toBe('rent');
});

test('should setup set start date', () => {
    const startDate =  moment();
    const action = {
        type: 'SET_START_DATE',
        startDate: startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should setup set end date', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate: endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});

test('should setup orderBy to low', () => {
    const action = {
        type: 'ORDER_BY_LOW'
    };
    const state = filtersReducer(undefined, action);
    expect(state.orderBy).toBe('low');
});

test('should setup orderBy to high', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        orderBy: 'low',
        startDate: undefined,
        endDate: undefined
    };
    const action = {
        type: 'ORDER_BY_HIGH'
    };
    const state = filtersReducer(currentState, action);
    expect(state.orderBy).toBe('high');
});