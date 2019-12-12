import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { start_edit_expense, start_remove_expense } from '../actions/expenses';
import RemoveModal from './RemoveModal';

export class EditExpensePage extends React.Component {
    state = {
        confirmRemove: false
    };
    onSubmit = (expense) => {
        this.props.start_edit_expense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onClick = () => {
        this.setState((prevState) => ({
            confirmRemove: true
        }));
    };
    onConfirmRemove = () => {
        this.setState(() => ({
            confirmRemove: false
        }));
        this.props.start_remove_expense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    onDenyRemove = () => {
        this.setState(() => ({
            confirmRemove: false
        }));
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}  
                    />
                    <button 
                        className="button button--secondary"
                        onClick={this.onClick}
                    >
                        Remove Expense
                    </button>
                </div>
                <RemoveModal 
                    confirmRemove={this.state.confirmRemove}
                    onConfirmRemove={this.onConfirmRemove}
                    onDenyRemove={this.onDenyRemove}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch, props) => ({
    start_edit_expense: (id, expense) => dispatch(start_edit_expense(id, expense)),
    start_remove_expense: (data) => dispatch(start_remove_expense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);