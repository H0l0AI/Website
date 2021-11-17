import logo from './logo.svg';
import './App.css';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {HomePage} from "./pages/Homepage";

const customHistory = createBrowserHistory();
@inject('rootStore') @observer class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <Router history={customHistory}>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                </Switch>
            </Router>

        );
    }
}

export default App;
