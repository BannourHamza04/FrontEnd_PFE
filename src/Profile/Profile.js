import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilService from '../Services/ProfilService';
import './Profile.css'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'

export default function Profile() {

    const token = Cookies.get('access_token');
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    const user = JSON.parse(localStorage.getItem('user_data'))

    const fetchProfile = async () => {
        try {
            if (!token) {
                console.error('Token not found in cookies');
                return;
            }
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            const response = await ProfilService.getProfilByAuthorId(user.id,headers)
            setProfile(response.data.profil);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    useEffect(() => {
        if(!token){
            navigate('/Login')
        }
        fetchProfile()
    }, []);

    return (
        <div>
            <div className="container-Profi">
                <div className="user-Prof">
                    <span className="gg--chevron-left" id="backButton"></span>
                    <h1> {profile.nameInProfile}</h1>
                </div>
                <div className="profile">
                    <div className="profile-image">
                    {profile.pdp && (
                        <img src={`http://localhost:4000/${profile.pdp}`} alt="profile" style={{ width: '140px' }} />
                    )}
                    </div>
                    <div className="profile-user-settings">
                        <h1 className="profile-user-name">{profile.nameInProfile}</h1>
                        <button className="primary profile-edit-btn" >Follow</button>

                        {/* <!-- <button className="btn profile-settings-btn" aria-label="profile settings">
                        <i className="fas fa-cog"
                            aria-hidden="true"></i>
                        </button> --> */}

                    </div>
                    <div className="profile-bio">
                        <p><span className="profile-real-name">Jane Doe</span> {profile.bio}📷✈️🏕️</p>
                    </div>
                </div>
                {/* <!-- End of profile section --> */}
            </div>

            <main>
                <div className="desktop-only">
                </div>
                <div className="mobile-tabs mobile-only">
                    <ul>
                        <li>
                        <Link to='/'>
                            <div>722</div>
                            posts
                        </Link>
                        </li>
                        <li>
                        <Link to='/Followers'>
                            <div>25.1m</div>
                            followers
                        </Link>
                        </li>
                        <li>
                        <Link to='/Followings'>
                            <div>6</div>
                            following
                        </Link>
                        </li>
                    </ul>
                    <div className="actions">
                        <svg aria-label="Posts" className="_8-yf5" fill="rgb(0, 149, 246)" height="24" viewBox="0 0 48 48"
                            width="24">
                            <path clip-rule="evenodd"
                                d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                                fill-rule="evenodd"></path>
                        </svg>
                        <svg aria-label="Posts" className="_8-yf5" fill="#8e8e8e" height="24" viewBox="0 0 48 48" width="24">
                            <path
                                d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z">
                            </path>
                        </svg>
                        <svg aria-label="Tagged" className="_8-yf5" fill="#8e8e8e" height="24" viewBox="0 0 48 48" width="24">
                            <path
                                d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z">
                            </path>
                        </svg>
                    </div>
                </div>

                <div className="gallery">
                    <div className="gallery-item">
                        <img alt="gallery-post" src="imgs/images/Login_Gym.jpg" />
                        <span className="media-icon"></span>
                    </div>
                    <div className="gallery-item">
                        <img alt="gallery-post" src="imgs/images/Register_Img.jpg" />
                        <span className="media-icon"></span>
                    </div>
                    <div className="gallery-item">
                        <img alt="gallery-post" src="imgs/images/Login_Gym2.jpg" />
                        <span className="media-icon"></span>
                    </div>
                    <div className="gallery-item">
                        <img alt="gallery-post" src="imgs/images/Login_Gym2.jpg" />
                    </div>
                    <div className="gallery-item">
                        <img alt="gallery-post" src="imgs/images/Login_Gym.jpg" />
                    </div>
                    <div className="gallery-item">
                        <img alt="gallery-post" src="imgs/images/Register_Img.jpg" />
                        <span className="media-icon"></span>
                    </div>
                </div>
            </main>
        </div>
    )
}
