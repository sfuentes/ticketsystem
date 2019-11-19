import {db} from '../../src/store/configureStore';
import {STATES} from '../constants';
import {getTicketById} from '../selectors';


export const closeTicket = (id) => (dispatch, getState) => {
    const doc = getTicketById(getState().couchtickets, id);
    console.log('#/*',doc);
    if (doc) {
        doc.state = STATES.CLOSED;

        return db.put(doc).catch(function (err) {
            console.log(err);
        })
    }
};

export const blockTicket = (id) => (dispatch, getState) => {
    const doc = getTicketById(getState().couchtickets, id);
    console.log(doc);
    if (doc) {
        doc.state = STATES.BLOCKED;
        return db.put(doc).catch(function (err) {
            console.log(err);
        })
    }
};
