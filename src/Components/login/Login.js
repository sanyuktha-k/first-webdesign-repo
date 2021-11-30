import React, { useState } from 'react';
import './Login.scss';
import { connect } from 'react-redux';
import { loginUser } from '../reducers/reducerAction/login';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



// set the state for this component
const Login = ({ loginUser }) => {

    // Initialize the state of the component
    const initialState = {
        email: '',
        password: ''
    }

    const [user, setUser] = useState(initialState);
    const { email, password } = user;
    const onChange = thisEle => setUser({ ...user, [thisEle.target.name]: thisEle.target.value });

    // const redirectToSignUp = () => {
    //     return <Redirect to="/signUp" />
    // }

    const onSubmit = async e => {
        console.log(email);
        e.preventDefault();
        loginUser(email, password);
    }

    // Component function
    return (
        <div className="main-container">
            <div className="container-div" >
                <div className="login-signup-div">
                    <div className="login-div">
                        <form onSubmit={e => onSubmit(e)}>
                            <input type="text" className="username-field" placeholder='Email' name='email' value={email} onChange={onChange} required="required"></input>
                            <input type="password" className="username-field" placeholder='Password' name='password' minLength="6" value={password} onChange={onChange} required="required"></input>
                            <div className='button-div'>
                                <input type="submit" className="login-button" value="LOGIN" />
                                <Link to="/signUp" className="signup-button">CREATE ACCOUNT</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
}

Login.protoTypes = {
    loginUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginUser })(Login);