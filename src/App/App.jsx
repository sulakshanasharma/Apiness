import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { DashboardPage } from '../DashboardPage';
import { LoginPage } from '../LoginPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render() {
        
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">                     
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={LoginPage} />
                                <Route path="/dashboard" component={DashboardPage} />
                                
                                
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
}

const actionCreators = {};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };