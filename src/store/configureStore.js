import PouchMiddleware from 'pouch-redux-middleware'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers/root'
import PouchDB from 'pouchdb'
import {BATCH_INSERT_TICKET, DELETE_TICKET, INSERT_TICKET, UPDATE_TICKET} from '../constants';

export const db = new PouchDB('http://34.65.140.211:5984/couchtickets', {
    live: false
});

export default function configureStore() {

    const pouchMiddleware = PouchMiddleware({
        path: '/couchtickets',
        db,
        actions: {
            remove: doc => {
                return {type: DELETE_TICKET, id: doc._id}
            },
            insert: doc => {
                return {type: INSERT_TICKET, ticket: doc}
            },
            batchInsert: docs => {
                return {type: BATCH_INSERT_TICKET, tickets: docs}
            },
            update: doc => {
                return {type: UPDATE_TICKET, ticket: doc}
            },
        },
        handleResponse: (error, data, callback) => {
            console.log('handleResponse', data, error);
        }
    });

    const applyMiddlewares = applyMiddleware(
        thunk,
        pouchMiddleware,
        logger,
    );

    const createStoreWithMiddleware = composeWithDevTools(
        applyMiddlewares
    )(createStore);

    return createStoreWithMiddleware(rootReducer);
}
