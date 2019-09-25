import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home-page/home-page.component';
import XORComponent from './quiz-components/xor-checkbox/xor-checkbox.component';
import ErrorBoundaryExample from './concepts-components/error-boundary-example/error-boundary-example.component';
import ControlledComponentExample from './concepts-components/controlled-component-example/controlled-component-example.component';
import AppHeader from './components/app-header/app-header.component';
import UploadDownload from './howto-components/upload-download/upload-download.component';

function App() {
    return (
        <div className="app">
            <AppHeader />
            <main className="app-container">
                <Switch>
                    {/*QUIZ ROUTES*/}
                    <Route exact path="/quiz/xor-checkbox" component={XORComponent} />

                    {/* HOW Tos */}
                    <Route exact path="/upload-download" component={UploadDownload} />

                    {/*CONCEPTS ROUTES*/}
                    <Route path="/controlled-component" component={ControlledComponentExample} />
                    <Route path="/error-boundary" component={ErrorBoundaryExample} />
                    <Route exact path="/" component={HomePage} />
                    <Redirect to="/" />
                </Switch>
            </main>
        </div>
    );
}

export default App;
