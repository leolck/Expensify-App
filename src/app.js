import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { add_expense } from './actions/expenses';
import { set_text_filter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();


store.subscribe(() => {
    const state = store.getState();
    const visible = getVisibleExpenses(state.expenses, state.filters);
    console.log(visible);
});

store.dispatch(add_expense({ description: 'Water bill', amount: 4500 }));
store.dispatch(add_expense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(add_expense({ description: 'Rent', amount: 109500 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
