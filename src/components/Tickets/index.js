import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Ticket from './components/Ticket';

const styles = (theme) => ({});

class Tickets extends React.Component {

    static propTypes = {
        classes: PropTypes.object,
        tickets: PropTypes.array,
        closeTicket: PropTypes.func,
        blockTicket: PropTypes.func,
    };

    render() {
        const {classes, tickets, closeTicket, blockTicket} = this.props;

        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                {tickets.map((ticket) => <Ticket key={ticket.id} ticket={ticket} closeTicket={closeTicket} blockTicket={blockTicket}/>)}
            </Grid>
        );
    }
}


export default withStyles(styles)(Tickets);
