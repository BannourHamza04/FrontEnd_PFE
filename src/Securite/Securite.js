import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import './Securite.css'

export default function EditProfile() {

    return (
        <section className="container-Sec">
            <div className="info-EdP">
                <div className="user-EdP">
                <FiChevronLeft  id="backButton" className='gg--chevron-left'></FiChevronLeft>
                    <h1>Notifications</h1>
                </div>
            </div>
            <div className="card-image-EdP">
            </div>
            <header>Hamza Bannour</header>
            <form action="#" className="form-EdP">
                <div className="input-box-EdP">
                    <label> Email</label>
                    <input type="email" placeholder="Enter UserName" required />
                </div>
                <div className="input-box-EdP">
                    <label>Password</label>
                    <input type="password" placeholder="" required />
                </div>
                <div className="input-box-EdP">
                    <label>Password Confirmation</label>
                    <input type="password" placeholder="" required />
                </div>
                <button>Submit</button>
            </form>
        </section>

    )
}
