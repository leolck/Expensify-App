import moment from 'moment'

// Get visible expenses
export default (expenses, { text, sortBy, orderBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const dueDateMoment = moment(expense.dueDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(dueDateMoment, 'day'): true
        const endDateMatch = endDate ? endDate.isSameOrAfter(dueDateMoment, 'day'): true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            if (orderBy === 'high') {
                return a.dueDate < b.dueDate ? 1 : -1
            } else {
                return a.dueDate > b.dueDate ? 1 : -1
            };
        } else if (sortBy === 'amount') {
            if (orderBy === 'high') {
                return a.amount < b.amount ? 1 : -1
            } else {
                return a.amount > b.amount ? 1 : -1
            };
        };
    });
};