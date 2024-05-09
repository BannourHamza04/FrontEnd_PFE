import React from 'react'
import './DropDown.css';

export default function DropDown() {


    return (
            <ul className="profile-dropdown-list">
                <li className="profile-dropdown-list-item">
                    <a href="#">
                        <i className="fa-regular fa-user"></i>
                        Edit Profile
                    </a>
                </li>
                <li className="profile-dropdown-list-item">
                    <a href="#">
                        <i className="fa-solid fa-chart-line"></i>
                        Languages
                    </a>
                </li>
                <li className="profile-dropdown-list-item">
                    <a href="#">
                        <i className="fa-solid fa-sliders"></i>
                        Settings
                    </a>
                </li>
                <li className="profile-dropdown-list-item">
                    <a href="#">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        Log out
                    </a>
                </li>
            </ul>
    )
}
