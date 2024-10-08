import React from 'react';
import style from './signup.module.css';

function Signup() {
    return (
        <div className={style.ContainerforSignup}>
            <div className={style.ContainerforFormBox}>
                <h2>Create a Secure Account</h2>
                <p>Welcome to the future of Banking and Savings</p>
                <form>
                    <label htmlFor="FullName">Full Name</label>
                    <input type="text" id="FullName" required />

                    <label htmlFor="EmailAddress">Email Address</label>
                    <input type="email" id="EmailAddress" required />

                    <label htmlFor="PhoneNo">Phone Number</label>
                    <input type="text" id="PhoneNo" required />

                    <label htmlFor="Password">Password</label>
                    <input type="password" id="Password" required />

                    <button type="submit">CREATE ACCOUNT</button>
                </form>
                <p className={style.LoginLink}>Already have an account? <a href="#">Log in</a></p>
            </div>
        </div>
    );
}

export default Signup;
