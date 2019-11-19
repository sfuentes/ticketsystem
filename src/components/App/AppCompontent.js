import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Paper} from '@material-ui/core';
import Tickets from '../Tickets';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({});

class AppComponent extends React.Component {

    static propTypes = {
        classes: PropTypes.object,
        tickets: PropTypes.array,
        closeTicket: PropTypes.func,
        blockTicket: PropTypes.func,
    };

    render() {
        const {classes, tickets, closeTicket, blockTicket} = this.props;

        return (
            <Container component="main" maxWidth="md">
                <CssBaseline/>
                <Paper>
                    {tickets.length > 0 ? <Tickets closeTicket={closeTicket} tickets={tickets} blockTicket={blockTicket}/> : <CircularProgress/>}
                </Paper>
            </Container>
        );
    }
}


export default withStyles(styles)(AppComponent);
