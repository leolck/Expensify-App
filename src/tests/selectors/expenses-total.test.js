import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should add no expenses', () => {
    expect(selectExpensesTotal([])).toBe(0)
});

test('should add a single expense', () => {
    expect(selectExpensesTotal([expenses[0]])).toBe(195)
});

test('should add multiple expenses', () => {
    expect(selectExpensesTotal(expenses)).toBe(114195);
});

