import React, { useEffect, useState } from 'react';
import './ProfilFriend.css'
import { Link, useParams } from 'react-router-dom'
import ProfilService from '../Services/ProfilService';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProfilFriend() {

    const navigate = useNavigate();
    const token = Cookies.get('access_token');
    const { profilId } = useParams();
    const [profile, setProfile] = useState({});

    const fetchProfile = async () => {
        try {
            const response = await ProfilService.getProfilById(profilId)
            setProfile(response.data.profil);
            console.log(profile)
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    // ------------------------------------------------------------------------------

    const [abonne, setAbonne] = useState();
    const author = JSON.parse(localStorage.getItem('user_data'))

    // Verify Following
    const verifierFollow = async () => {
        try {
            const followingId = profilId
            const authorId = author.id
            const response = await ProfilService.ifIsFollowing(authorId, followingId)
            if (response.data == true) {
                setAbonne(true)
            }
            else {
                setAbonne(false)
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    }

    const fonctionPourBoutonRouge = async () => {
        try {
            const followingId = profilId
            const authorId = author.id
            console.log(followingId)
            const response = await ProfilService.unFollow(authorId, followingId)
            if (response.status === 200) {
                toast.success(response.data)
            }
            else {
                console.log(response.data)
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    // Follow
    const fonctionPourBoutonBleu = async () => {
        try {
            const followingId = profilId
            const authorId = author.id
            console.log(followingId)
            const response = await ProfilService.follow(authorId, followingId)
            if (response.status == 200) {
                toast.success(response.data)
            }
            else {
                console.log(response.data)
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    const toggleAbonnement = async () => {
        setAbonne(!abonne);
        if (abonne) {
            await fonctionPourBoutonRouge();
        } else {
            await fonctionPourBoutonBleu();
        }
    };

    useEffect(() => {
        verifierFollow()
    }, [abonne]);

    useEffect(() => {
        if (!token) {
            navigate('/Login')
        }
        fetchProfile()
    }, []);

    return (
        <>
            <div>
                <ToastContainer position='top-center' />
            </div>
            <div>
                <div className="container-Profi">
                    <div className="user-Prof">
                        <span className="gg--chevron-left" id="backButton"></span>
                        <h2> {profile.nameInProfile}</h2>
                    </div>
                    <div className="profile">
                        <div className="profile-image">
                            {profile.pdp && (
                                <img src={`http://localhost:4000/${profile.pdp}`} alt="profile" style={{ width: '140px' }} />
                            )}
                        </div>
                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">{profile.nameInProfile}</h1>
                            <button className="primary profile-edit-btn" style={{ backgroundColor: abonne ? 'red' : 'blue' }} onClick={toggleAbonnement}>
                                {abonne ? 'Unfollow' : 'Follow'}</button>
                        </div>
                        <div className="profile-bio">
                            <p><span className="profile-real-name">Jane Doe</span> {profile.bio}📷✈️🏕️</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
