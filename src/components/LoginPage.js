import React from 'react';
import './loginpage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin123' && password === 'PramilaDevi2801') {
            localStorage.setItem('isAuthenticated', 'true'); // Set authentication flag
            navigate('/form');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className='Container'>
            <div className ='info'>

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <h2><i>School Portal</i></h2>
                        <div className="mb-3">
                            <label htmlFor="TextInput" className="form-label">Id</label>
                            <input
                                type="text"
                                id="TextInput"
                                className="form-control"
                                placeholder="Enter Your Id"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <Link to='/forgetpassword'>Forget Password?</Link>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
