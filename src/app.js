import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { start_set_expenses } from './actions/expenses';
import { set_text_filter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(start_set_expenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});


