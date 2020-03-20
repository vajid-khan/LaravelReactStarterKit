import React from 'react';
import ReactDOM from 'react-dom';
import MasterLayout from './layout/layout';
import pages from './pages';

import {
    Switch,
    Route,
    BrowserRouter,
} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MasterLayout>
                    <Switch>
                        <Route path="/home" component={pages.Home} />
                        <Route path="/contact" component={pages.Contact} />
                        <Route path="/about" component={pages.About} />
                    </Switch>
                </MasterLayout>
            </BrowserRouter>
        )
    }
}

if (document.getElementById('react-app')) {
    ReactDOM.render(<App />, document.getElementById('react-app'));
}
