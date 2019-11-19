import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppComponent from './AppCompontent';
import {blockTicket, closeTicket} from '../../actions';
import {getNonBlockedTickets} from '../../selectors';

class AppContainer extends React.Component {
    static propTypes = {
        tickets: PropTypes.array,
        closeTicket: PropTypes.func
    };

    handleCloseTicket = (id) => {
        this.props.closeTicket(id)
    };

    handleBlockTicket = (id) => {
        this.props.blockTicket(id);
    };

    render() {
        const {tickets} = this.props;

        return (
            <AppComponent tickets={tickets} closeTicket={this.handleCloseTicket} blockTicket={this.handleBlockTicket}/>
        );

    }
}

const mapStateToProps = (state) => ({
    tickets: getNonBlockedTickets(state)
});

const mapDispatchToProps = (dispatch) => ({
    closeTicket: (id) => dispatch(closeTicket(id)),
    blockTicket: (id) => dispatch(blockTicket(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
