import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import  './EditProfile.css';

export default function EditProfile() {

    return (
        
        <section className='container-EdP'>
            <div className="info-EdP">
                <div className="user-EdP">
                <FiChevronLeft  id="backButton" className='gg--chevron-left'></FiChevronLeft>
                    <h1>Edit Profile</h1>
                </div>
            </div>
            <div className="card-image-EdP" id="profile-image-container">
            <input type="file" id="file-input" accept="image/*" style={{ display: 'block' }} />
            </div>
            <header>Hamza Bannour</header>
            <form action="#" className="form-EdP">
                <div className="input-box-EdP">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your Name" required />
                </div>
                <div className="input-box-EdP">
                    <label>Age</label>
                    <input type="number" placeholder="Enter your Age" required />
                </div>
                <div className="input-box-EdP">
                    <label>BirthDate</label>
                    <input type="date" placeholder="Enter birth date" required />
                </div>

                <div className="input-box-EdP address">
                    <label>Local</label>
                    <div className="column-EdP">
                        <div className="select-box-EdP">
                            <select>
                                <option hidden>Country</option>
                                <option>America</option>
                                <option>Japan</option>
                                <option>India</option>
                                <option>Nepal</option>
                            </select>
                        </div>
                        <input type="text" placeholder="Enter your city" required />
                    </div>
                </div>
                <div className="input-box-EdP">
                    <label>Bio</label>
                    <input type="text" placeholder="Enter your Bio" required />
                </div>
                <button>Submit</button>
            </form>
        </section>

    )
}
