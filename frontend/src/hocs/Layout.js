import React, { useEffect } from 'react';
import Navi from '../components/Navi';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    return (
            <div>
                <Navi />
                {children}
            </div>
    );
};
        
export default connect(null, { checkAuthenticated, load_user })(Layout);
// <footer style={{marginBottom:0}}>credits for authentication: https://github.com/linkedweb/auth_system</footer>
