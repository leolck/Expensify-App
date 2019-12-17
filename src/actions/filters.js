// SET_TEXT_FILTER
export const set_text_filter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text: text
});
// SORT_BY_DATE
export const sort_by_date = () => ({
    type: 'SORT_BY_DATE',
});
// SORT_BY_AMOUNT
export const sort_by_amount = () => ({
    type: 'SORT_BY_AMOUNT',
});
export const order_by_high = () => ({
    type: 'ORDER_BY_HIGH'
});
export const order_by_low = () => ({
    type: 'ORDER_BY_LOW'
});
// SET_START_DATE
export const set_start_date = (startDate) => ({
    type: 'SET_START_DATE',
    startDate: startDate
});

// SET_END_DATE
export const set_end_date = (endDate) => ({
    type: 'SET_END_DATE',
    endDate: endDate
});