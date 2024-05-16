import React, { useState } from 'react';
import '../../App.css';
import './AuthPage.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleForgotPassword = () => {
        // Handle forgot password logic here, such as sending a request to a server
        console.log('Email:', email);
    };

    return (
        <div className='auth-container'>
            <h1 className='auth-heading'>Forgot Password</h1>
            <div className='auth-form'>
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='auth-input'
                />
                <button onClick={handleForgotPassword} className='auth-button'>Reset Password</button>
            </div>
        </div>
    );
}

export default ForgotPassword;
