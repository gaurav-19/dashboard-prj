import React, { useContext, useState } from 'react';
import AuthService from '../../services/AuthService';
import AppContext from '../common/AppContext';

const Login = () => {
    const globalContext = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validate = () => {
        let errors = {};
        let isValid = true;

        if (email.trim() === '') {
            isValid = false;
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            isValid = false;
            errors.email = 'Email is not valid';
        }

        if (password.trim() === '') {
            isValid = false;
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            isValid = false;
            errors.password = 'Password should have at least 6 characters';
        }

        setError(errors);
        return isValid;
    }

    const checkemail = () => {
        let errors = {};
        let isValid = true;

        if(email.trim().toLowerCase() === 'admin@dashboard.com' && password.trim() === 'password@123'){
            AuthService.settoken('iamthelogintoken');
            globalContext.setcurrentuser(AuthService.getCurrentUser());
        } else{
            errors.password = 'Email or Password is wrong!';
            isValid = false;
        }
        setError(errors);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate() && checkemail()) {
            // handle login
        }
    }

    return (
        <div className="container-fluid ">
            <div className='row vh-100 bg-light bg-gradient align-items-center justify-content-center'>
            <div className='col-sm-10 col-md-4 border rounded shadow p-5 bg-white'>
            <div className='h1 mb-5 text-center'>Login to DashboardApp</div>
            <div className='small m-1 text-center'>Login Email: admin@dashboard.com</div>
            <div className='small m-1 text-center'>Password: password@123</div>
            <form onSubmit={handleSubmit} className='d-flex flex-column'>
                <div className="form-group mb-4">
                    <label htmlFor="email" className='mb-2 fw-bold fs-5'>Email</label>
                    <input className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error.email && <small className="form-text text-danger">{error.email}</small>}
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password" className='mb-2 fw-bold fs-5'>Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error.password && <small className="form-text text-danger">{error.password}</small>}
                </div>
                <button type="submit" className="btn btn-primary my-2">Login</button>
            </form>
        </div>
        </div></div>);
}

export default Login;