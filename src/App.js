import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';

import './App.css';
import HomePage from './pages/home-page/home-page.component';
import ErrorBoundaryPage from './pages/error-boundary-page/error-boundary-page.component';
import ControlledComponentPage from './pages/controlled-component-page/controlled-component-page.component';
import XORComponent from './quiz-components/xor-checkbox/xor-checkbox.component';

function App() {
    return (
        <div className="app">
            <header className="app-header">All Things React!</header>
            <main className="app-container">
                <Switch>
                    {/*QUIZ ROUTES*/}
                    <Route exact path="/quiz/xor-checkbox" component={XORComponent} />

                    {/*CONCEPTS ROUTES*/}
                    <Route path="/controlled-component" component={ControlledComponentPage} />
                    <Route path="/error-boundary" component={ErrorBoundaryPage} />
                    <Route exact path="/" component={HomePage} />
                    <Redirect to="/" />
                </Switch>
            </main>
        </div>
    );
}

export default App;
