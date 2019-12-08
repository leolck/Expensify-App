import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { start_add_expense } from '../actions/expenses';


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.start_add_expense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        ); 
    } 
}

const mapDispatchToProps = (dispatch) => ({
    start_add_expense: (expense) => dispatch(start_add_expense(expense))
});



export default connect(undefined, mapDispatchToProps)(AddExpensePage);