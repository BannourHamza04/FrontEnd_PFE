import React, { useRef } from 'react'
import './Loginn.css'
import { Link } from 'react-router-dom'
import UserService from '../Services/UserService'
import { useNavigate } from 'react-router-dom';

export default function Loginn() {

    const emailField = useRef()
    const passwordField = useRef()
    const navigate = useNavigate();

    const ValidateForm = async () => {
        const email = emailField.current.value
        const password = passwordField.current.value
        let isFormValid = true

        // Function Email Validation
        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        if(password.length < 8){
            alert('Password invalid, The Password must be at least 8 characters long ! ')
            isFormValid = false
        }

        if(!validateEmail(email)){
            alert('Invalid email format ! ')
            isFormValid = false
        }
        
        if(isFormValid){
        try{
            const user = {
                email : email,
                password : password
            }

            const response = await UserService.login(user)
            if(response.status === 200){
                console.log(response.data)
                localStorage.setItem('user_data',JSON.stringify(response.data.sessUser))
                localStorage.setItem('token', response.data.token)
                console.log(response)
                navigate('/SessionTest');
                }
            else{
                alert(response.data);
            }

        }catch(err){
            console.log(err)
        }

        }
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        ValidateForm()
    }

    return (
        <div className='bodyy'>
        <div className="container-loginn">
            <input type="checkbox" id="flip" />
                <div className="cover-loginn">
                    <div className="front-loginn">
                        <img src="/imgs/images/Login_Gym2.jpg" alt="" />
                            <div className="text-loginn">
                                <span className="text-1">Every new friend is a <br /> new adventure</span>
                                <span className="text-2">Let's get connected</span>
                            </div>
                    </div>
                    <div className="back">
                        {/* <!--<img className="backImg" src="images/backImg.jpg" alt="">--> */}
                            <div className="text-loginn">
                                <span className="text-1">Complete miles of journey <br /> with one step</span>
                                <span className="text-2">Let's get started</span>
                            </div>
                    </div>
                </div>
                <div className="forms-loginn">
                    <div className="form-content-loginn">
                        <div className="login-form-loginn">
                            <div className="title-loginn">Login</div>
                            <form onSubmit={handleSubmit}>
                                <div className="input-boxes-loginn">
                                    <div className="input-box-loginn">
                                        <i className="fas fa-envelope"></i>
                                        <input type="text" placeholder="Enter your email" ref={emailField} required />
                                    </div>
                                    <div className="input-box-loginn">
                                        <i className="fas fa-lock"></i>
                                        <input type="password" placeholder="Enter your password" ref={passwordField} required />
                                    </div>
                                    <div className="text-loginn"><Link to="/Login">Forgot password?</Link></div>
                                    <div className="button input-box-loginn">
                                        <input type="submit" value="Sumbit" />
                                    </div>
                                    <div className="text sign-up-text">Don't have an account? <Link to='/Register'><label htmlFor="" className='label-loginn'>Sigup now</label></Link></div>
                                </div>
                            </form>
                        </div>
                        <div className="signup-form-loginn">
                            <div className="title-loginn">Signup</div>
                            <form action="#">
                                <div className="input-boxes-loginn">
                                    <div className="input-box-loginn">
                                        <i className="fas fa-user"></i>
                                        <input type="text" placeholder="Enter your name" required />
                                    </div>
                                    <div className="input-box-loginn">
                                        <i className="fas fa-envelope"></i>
                                        <input type="text" placeholder="Enter your email" required />
                                    </div>
                                    <div className="input-box-loginn">
                                        <i className="fas fa-lock"></i>
                                        <input type="password" placeholder="Enter your password" required />
                                    </div>
                                    <div className="button input-box-loginn">
                                        <input type="submit" value="Sumbit" />
                                    </div>
                                    <div className="text-loginn sign-up-text-loginn">Already have an account? <label htmlFor="flip" className='label-loginn'>Login now</label></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}
