import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../../App.css';
import './Login.css';

// Set up axios
import axios from '../../api/axios'; 
const LOGIN_URL = '/login';

function Login() {
    const { auth, setAuth } = useAuth(); // Use the useAuth hook to get authentication state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const redirect = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // Check if user is already authenticated
    useEffect(() => {
        if (auth.isAuthenticated) {
            redirect('/'); // Redirect to home page if already authenticated
        }
    }, [auth, redirect]);

    const handleLogin = async (e) => {
        e.preventDefault();
    
        if (!username || !password) {
            setErrorMessage('Please enter both username and password.');
            return;
        }
    
        const credentials = {
            username: username,
            password: password
        };
    
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify(credentials), 
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            });
    
            if (!response.data.accessToken) {
                throw new Error('Login Failed');
            }
            
            const accessToken = response.data.accessToken;
    
            // Store isLoggedIn state in localStorage
            localStorage.setItem('isLoggedIn', 'true');
    
            // Set authentication state and accessToken
            setAuth({ isAuthenticated: true, username, accessToken });
            redirect(from, { replace: true });
            setErrorMessage('');
        } catch (err) {
            if (!err?.response) {
                setErrorMessage('No Server Response');
            } else if (err.response?.status === 400) {
                setErrorMessage('Invalid Username or Password');
            } else if (err.response?.status === 401) {
                setErrorMessage('Unauthorized');
            } else {
                setErrorMessage('Login Failed');
            }
        }
    };

    return (
        <div className='login-container'>
            <h1 className='login-heading'>Login</h1>
            <div className='login-form'>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='login-input'
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='login-input'
                />
                <button onClick={handleLogin} className='login-button'>Login</button>
                <div className='login-options'>
                    <Link to='/sign-up' className='login-option'>Create Account</Link>
                    <Link to='/forgot-password' className='login-option'>Forgot Password</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
