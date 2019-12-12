import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { set_text_filter, set_start_date, set_end_date } from '../actions/filters';

export const ExpensesSummary = (
    { 
        expenseCount, expensesTotal, hiddenExpenses, set_text_filter, set_start_date, set_end_date 
    }) => {
    const expenseWordHidden = hiddenExpenses === 1 ? 'expense' : 'expenses';
    const noFilters = hiddenExpenses === 0;
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    const clearFilters = () => {
        set_text_filter('');
        set_start_date(null);
        set_end_date(null);
    };
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
                </h1>
                <h2 className="page-header__subtitle">
                    {
                        noFilters
                        ?
                        <i>Showing all expenses. No filters in place.</i>
                        :
                        <i><span>{hiddenExpenses}</span> {expenseWordHidden} hidden because of your filters.</i>
                    }
                </h2>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                    <button 
                        className="button" 
                        onClick={clearFilters}
                    >
                        Clear Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        hiddenExpenses: state.expenses.length - visibleExpenses.length
    };
};

const mapDispatchToProps = (dispatch) => ({
    set_text_filter: (text) => dispatch(set_text_filter(text)),
    set_start_date: (startDate) => dispatch(set_start_date(startDate)),
    set_end_date: (endDate) => dispatch(set_end_date(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesSummary);

