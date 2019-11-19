import {combineReducers} from 'redux';
import {BATCH_INSERT_TICKET, INSERT_TICKET, UPDATE_TICKET} from '../../constants';
import {getTicketById} from '../../selectors';

const initialState = {
    tickets: []
};

const couchtickets = (state = initialState, action) => {
    let tickets = [];

    switch (action.type) {
        case BATCH_INSERT_TICKET:
            return {...state, tickets: action.tickets};

        case UPDATE_TICKET:
            tickets = state.tickets.map((ticket) => {
                if (ticket.id === action.ticket.id && ticket._rev === action.ticket._rev) {
                    return action.ticket;
                }
                return ticket;
            });

            return {...state, tickets: tickets};

        case INSERT_TICKET:

            if (getTicketById(state, action.ticket.id)) {
                tickets = state.tickets.map((ticket) => {
                    if (ticket.id === action.ticket.id && ticket._rev <= action.ticket._rev) {
                        return action.ticket;
                    }
                    return ticket;
                });
            } else {
                tickets = [...state.tickets, action.ticket];
            }

            return {...state, tickets: tickets};

        default:
            return state;
    }
};

export default combineReducers({
        couchtickets
    }
);

