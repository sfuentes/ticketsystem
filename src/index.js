import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import AppContainer from './components/App/AppContainer';

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    )
};

ReactDOM.render(
    App(),
    document.getElementById('root')
);
