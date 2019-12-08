import React from 'react';
import { connect } from 'react-redux';
import { set_text_filter, sort_by_date, sort_by_amount, set_start_date, set_end_date } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.set_start_date(startDate);
        this.props.set_end_date(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused: calendarFocused }))
    };
    onTextChange = (e) => {
        this.props.set_text_filter(e.target.value);
    };
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sort_by_date();
        } else if (e.target.value === 'amount') {
            this.props.sort_by_amount();
        }
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type='text' 
                            className="text-input"
                            placeholder="Search expenses"
                            value={this.props.filters.text} 
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select 
                            className="select"
                            value={this.props.filters.sortBy} 
                            onChange={this.onSortChange}
                            >
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    set_text_filter: (text) => dispatch(set_text_filter(text)),
    sort_by_date: () => dispatch(sort_by_date),
    sort_by_amount: () => dispatch(sort_by_amount),
    set_start_date: (startDate) => dispatch(set_start_date(startDate)),
    set_end_date: (endDate) => dispatch(set_end_date(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)