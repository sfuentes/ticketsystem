import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';

const styles = (theme) => ({
    card: {
        width: '90%',
        margin: '8px'
    },
    actions: {
        justifyContent: 'flex-end'
    }
});

class Ticket extends React.Component {

    static propTypes = {
        classes: PropTypes.object,
        ticket: PropTypes.object,
        closeTicket: PropTypes.func,
    };

    render() {
        const {classes, ticket, closeTicket, blockTicket} = this.props;
        const {reportType, message} = ticket.payload;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom={true}>
                        ID : {ticket.id}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        State : {ticket.state}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Type : {reportType}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Message : {message}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <Button size="small">Details</Button>
                    <Button size="small" variant="contained" color="secondary"
                            onClick={() => blockTicket(ticket.id)}>Block</Button>
                    <Button size="small" variant="contained" color="primary"
                            onClick={() => closeTicket(ticket.id)}>Close</Button>
                </CardActions>
            </Card>
        );
    }
}


export default withStyles(styles)(Ticket);
