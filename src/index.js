import React from 'react';
import ReactDOM from 'react-dom';
import ContactPage from './components/ContactPage';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store';

// ReactDOM.render(<ContactPage />, document.getElementById('root'));


export const store = configureStore();
// const history = syncHistoryWithStore(store);

ReactDOM.render((
        <Provider store={ store }>
            <ContactPage />
        </Provider>
    ),
    document.querySelector('#root'));
