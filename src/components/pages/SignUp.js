import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import './AuthPage.css';


function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State variable to hold error message
    const redirect = useNavigate();

    // Regular expressions for username and password validation
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/; 
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/; 

    const handleSignup = () => {
        // Validate username and password
        if (!usernameRegex.test(username)) {
            setErrorMessage('Username must be alphanumeric and contain only underscores or hyphens, and must be between 3 and 16 characters long.');
            return;
        }
        if (!passwordRegex.test(password)) {
            setErrorMessage('Password must contain at least eight characters, including one uppercase letter, one lowercase letter, and one number.');
            return;
        }

        // Prepare user registration data
        const userData = {
            username: username,
            email: email,
            password: password
        };


        // Send a POST request to the backend /signup endpoint
        fetch('http://localhost:3001/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 400) {
                setErrorMessage('Username or email already exists. Please choose a different one.');
                throw new Error('Username or email already exists');
            } else {
                throw new Error('Signup failed');
            }
        })
        .then(data => {
            console.log(data); // Log the response data (e.g., success message)
            // Redirect to login page
            redirect('/login');
        })
        .catch(error => {
            console.error('Error:', error); // Log any errors that occur during the request
            // Handle signup error
            if (error instanceof TypeError && error.message === 'Failed to fetch') {
                setErrorMessage('Failed to connect to the server. Please check your internet connection.');
            } else if (error.message === 'Signup failed') {
                setErrorMessage('Signup failed. Please try again later.');
            } else if (error.message === 'Username or email already exists') {
                setErrorMessage('Username or email already exists. Please choose a different one.');
            } else {
                setErrorMessage('An unexpected error occurred. Please try again later.');
            }
        });
    };

    return (
        <div className='auth-container'>
            <h1 className='auth-heading'>Create Account</h1>
            <div className='auth-form'>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='auth-input'
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='auth-input'
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='auth-input'
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Render error message */}
                <button onClick={handleSignup} className='auth-button'>Create Account</button>
            </div>
        </div>
    );
}

export default Signup;
