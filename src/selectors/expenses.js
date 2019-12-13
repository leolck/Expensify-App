import moment from 'moment'

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const dueDateMoment = moment(expense.dueDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(dueDateMoment, 'day'): true
        const endDateMatch = endDate ? endDate.isSameOrAfter(dueDateMoment, 'day'): true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.dueDate < b.dueDate ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    });
};