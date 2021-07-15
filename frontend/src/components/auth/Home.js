import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ isAuthenticated, user }) => {
    console.log("this is the user",user)
    
    return (    
    <div className='container'>
        <div class='jumbotron mt-5'>
            <h1 class='display-4'>Welcome to Climb D. Jango!</h1>
            <p class='lead'>A place where you can discover your climbing potential!</p>
            <hr class='my-4' />
            <div>
                { isAuthenticated ?
                    <Fragment>
                        <div>
                            Show Tracker Page
                        </div>
                        <div>
                            Show Calendar Page
                        </div>
                    </Fragment>
                    : 
                    <Fragment>
                        <p>Click the Log In button</p>
                        <Link class='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
                    </Fragment>
                }
            </div>
        </div>
    </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps)(Home);