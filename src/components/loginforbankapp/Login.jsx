import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoforbank from '../../assets/logoforbank2.png';
import './login.css'; 

function Login() {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log('before',email,password);
        const emal = email.trim()
        const pass = password.trim() 

        const userExist = emal != '' && pass != ''
        console.log(userExist);
        console.log('after',emal,pass);

    if(userExist){
        navigate("/dashboard",{replace:true});
        console.log('redirect successful')
    }
    else{
        console.log('user does not exist')
    }
    setEmail('')
    setPassword('')

    }
    return (

<div className="fullscreen-background">

<div className="ContainerforLogin">
    <div className='Logocontainer'>
    {/* <img src = {logoforbank} className="logoforbank2" alt="BankLogo1" /> */}
    </div>

            <div className="ContainerforInput">
                <h2>Login to your account</h2>
                <p>Securely login to your Nobletrust Bank</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email-phone" required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="password" required >Password</label>
                    <input type="password" id="password" required   value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit">LOG IN</button>
                </form>
                <p className="register-text">
                    Don't have an account? <a href="#">Register</a>
                </p>
                
            </div>
        </div>
</div>


        
        
    );
}

export default Login;
