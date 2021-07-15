import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './hocs/Layout';
import Home from './components/auth/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Activate from './components/auth/Activate';
import ResetPassword from './components/auth/ResetPassword';
import ResetPasswordConfirm from './components/auth/ResetPasswordConfirm';
import Facebook from './components/auth/Facebook';
import AllRoutes from './components/AllRoutes';
import Google from './components/auth/Google';
import AddRoutes from './components/AddRoute';
import Calendar from './components/Calendar';
import Tracker from './components/Tracker';

import { Provider } from 'react-redux';
import store from './store';


const App = () => (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/google' component={Google} />
                        <Route exact path='/facebook' component={Facebook} />
                        <Route exact path='/reset-password' component={ResetPassword} />
                        <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                        <Route exact path='/activate/:uid/:token' component={Activate} />
                        <Route exact path='/routes/add' component={AddRoutes} />
                        <Route exact path='/routes' component={AllRoutes}/>
                        <Route exact path='/tracker' component={Tracker}/>
                        <Route exact path='/cal' component={Calendar}/>
                    </Switch>
                </Layout>
            </Router>
        </Provider>
);

export default App;
