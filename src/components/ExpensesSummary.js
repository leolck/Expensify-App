import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, hiddenExpenses }) => {
    const expenseWordHidden = hiddenExpenses === 1 ? 'expense' : 'expenses';
    const noFilters = hiddenExpenses === 0;
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
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

export default connect(mapStateToProps)(ExpensesSummary);

