import React, { useRef } from 'react'
import './Register.css'
import UserModel from '../Models/User'
import { Link } from 'react-router-dom'
import UserService from '../Services/UserService'

export default function Register() {

    const usernameField = useRef()
    const emailField = useRef()
    const passwordField = useRef()
    

    const ValidateForm = async () => {
        const nameUser = usernameField.current.value
        const email = emailField.current.value
        const password = passwordField.current.value
        let isFormValid = true

        // Function Email Test
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
            const newUser = new UserModel(nameUser,email,password)
            const response = await UserService.register(newUser)
            alert(response.data);
        }catch(err){
            console.log(err)
        }

        }
    }

    const getUserId = async () =>{
        const userId = UserService.getUserIdSession()
        alert(userId)
    }


    getUserId()

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
                            <div className="title-loginn">Signup</div>
                            <form onSubmit={handleSubmit}>
                                <div className="input-boxes-loginn">
                                <div className="input-box-loginn">
                                        <i className="fas fa-envelope"></i>
                                        <input type="text" placeholder="Enter your Username" ref={usernameField} required />
                                    </div>
                                    <div className="input-box-loginn">
                                        <i className="fas fa-envelope"></i>
                                        <input type="text" placeholder="Enter your email" ref={emailField} required />
                                    </div>
                                    <div className="input-box-loginn">
                                        <i className="fas fa-lock"></i>
                                        <input type="password" placeholder="Enter your password" ref={passwordField} required />
                                    </div>
                                    <div className="text-loginn"><Link to="/Register">Forgot password?</Link></div>
                                    <div className="button input-box-loginn">
                                        <input type="submit" value="Sumbit" />
                                    </div>
                                    <div className="text sign-up-text">Do you have an account? <Link to='/Login'><label htmlFor="" className='label-loginn'>Login now</label></Link></div>
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
