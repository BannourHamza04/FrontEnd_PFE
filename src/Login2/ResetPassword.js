import React, { useRef } from 'react'
import './Loginn.css'
import { Link } from 'react-router-dom'
import UserService from '../Services/UserService'
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {

    const emailField = useRef()
    const navigate = useNavigate();

    const ValidateForm = async () => {
        const email = emailField.current.value
        let isFormValid = true

        // Function Email Validation
        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        if(!validateEmail(email)){
            alert('Invalid email format ! ')
            isFormValid = false
        }
        
        if(isFormValid){
        try{
            const user = {
                email : email
            }
            const response = await UserService.forgetPassword(user)
            if(response.status === 201){
                alert(response.data)
                }
            if(response.status === 200){
                alert('A reset email has been sent.');
                navigate('/EditPassword')
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
                            <div className="text-loginn">
                                <span className="text-1">Complete miles of journey <br /> with one step</span>
                                <span className="text-2">Let's get started</span>
                            </div>
                    </div>
                </div>
                <div className="forms-loginn">
                    <div className="form-content-loginn">
                        <div className="login-form-loginn">
                            <div className="title-loginn">Forget Password</div>
                            <form onSubmit={handleSubmit}>
                                <div className="input-boxes-loginn">
                                    <div className="input-box-loginn">
                                        <i className="fas fa-envelope"></i>
                                        <input type="text" placeholder="Enter your email" ref={emailField} required />
                                    </div>
                                    <div className="button input-box-loginn">
                                        <input type="submit" value="Sumbit" />
                                    </div>
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
