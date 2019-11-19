export const getTickets = (state) => {
    return state.couchtickets.tickets;
};

export const getNonBlockedTickets = (state) => {
    return getTickets(state).filter((ticket) => {
        return ticket.state !== 'BLOCKED';
    });
};

export const getTicketById = (state, id) => {
    return state.tickets.find((ticket) => ticket.id === id) || null;
};
