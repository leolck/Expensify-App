import { 
    set_text_filter, sort_by_date, sort_by_amount, set_start_date, set_end_date
} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = set_start_date(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = set_end_date(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text filter action object (default values)', () => {
    const action = set_text_filter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate set text filter action object with text value', () => {
    const action = set_text_filter('rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('should generate sort by date action object', () => {
    const action = sort_by_date();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});

test('should generate sort by amount action object', () => {
    const action = sort_by_amount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});