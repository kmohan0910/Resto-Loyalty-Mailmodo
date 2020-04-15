import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Restaurant from './components/Restaurant';
import  Landing from './components/Landing';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" exact component={Landing} />
                    <Route path="/restaurant" exact component={Restaurant} />
                    
                </Switch>
            </Router>
        )
    }
}