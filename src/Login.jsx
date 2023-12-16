
import blue from './assets/Blue Logo.svg';
import './Login.css'
import React from "react";
import { Link } from 'react-router-dom';



function Login() {
  
    return (
        <div className="desktop-laptop">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="container">
                                <div className="div">
                                    <div className="remember-me">
                                        <div className="text-wrapper">Remember me</div>
                                        <div className="rectangle" />
                                    </div>
                                    <div className="text-wrapper-2">Forgot Password</div>
                                    <div className="login">
                                        <div className="overlap-group-2">
                                            <div className="rectangle-2" />
                                            <Link to="/home" className="text-wrapper-3">
                                             Login
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="password">
                                        <input type="text" className="div-wrapper" placeholder="Password"  required/>
                                    </div>
                                    <div className="user-name">
                                    <input type="text" className="div-wrapper" placeholder="Username or Email"  required/>
                                    </div>
                                    <div className="hello-INE">
                                        <div className="text-wrapper-5">Hello INE !</div>
                                        <div className="text-wrapper-6">Login with your details</div>
                                    </div>
                                </div>
                            </div>
                            <img className="blue-logo" alt="Blue logo" src={blue}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login
