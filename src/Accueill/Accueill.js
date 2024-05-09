import React from 'react'
import './Accueill.css'
import { Link } from 'react-router-dom'

export default function Accueill() {

    return (
        <div className="landing-Acc">
            <div className="container-Acc">
                <div className="text-Acc">
                    <div className="logo-Acc">
                        <img src="/imgs/images/google.png" alt="" />
                    </div>
                    <h1>Welcome, To Our App</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam, voluptas accusantium dicta in neque deserunt! Soluta.</p>
                    <div className="bn" style={{margintop:'5px'}}>
                        <button className="cn-Acc"><Link to="/Login">Login</Link></button>
                        <button className="cn-Acc"><Link to="/Register">Register</Link></button>
                    </div>
                </div>
                <div className="image-Acc">
                    <img decoding="async" src="" alt="" />
                </div>
            </div>
        </div>

    )
}
