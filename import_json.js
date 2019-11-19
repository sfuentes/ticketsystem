const config = require('./config');

const fs = require('fs');
const nano = require('nano')(config.host);
const db = nano.use(config.db);

/**
 * Read the json file providing the Tickets, return the included Array
 *
 * @returns { Array | null}
 */
const readTickets = () => {
    let rawdata = fs.readFileSync(`./${config.filename}`);
    let tickets = JSON.parse(rawdata);

    return tickets.elements || null;
};


const importTickets = (tickets) => {
    // We going to use single import statements no Batch insert
    tickets.forEach((ticket) => {
        db.insert({...ticket, _id: ticket.id}).then((body) => {
            console.info(ticket.id, 'has been imported into the database');
        }).catch((err)=> console.error('errror', err));
    });
};

importTickets(readTickets());


