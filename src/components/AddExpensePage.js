import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { add_expense } from '../actions/expenses';


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.add_expense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                    />
            </div>
        ); 
    } 
}

const mapDispatchToProps = (dispatch) => ({
    add_expense: (expense) => dispatch(add_expense(expense))
});



export default connect(undefined, mapDispatchToProps)(AddExpensePage);