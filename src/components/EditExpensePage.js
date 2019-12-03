import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { edit_expense, start_remove_expense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.edit_expense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onClick = () => {
        this.props.start_remove_expense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}  
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch, props) => ({
    edit_expense: (id, expense) => dispatch(edit_expense(id, expense)),
    start_remove_expense: (data) => dispatch(start_remove_expense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);