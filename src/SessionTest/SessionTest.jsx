import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../Services/UserService' 
import ProfilService from '../Services/ProfilService';

export default function SessionTest() {

    const navigate = useNavigate();
    const [connectedUser, setConnectedUser] = useState({});
    const [profile, setProfile] = useState({});
    const user = JSON.parse(localStorage.getItem('user_data'))

    const fetchProfile = async () => {
        try {
            // console.log(user)
            const response = await ProfilService.getProfilByAuthorId(user.id)
            setProfile(response.data.profil);
            // console.log(response.data.profil.city)
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    useEffect(() => {
        UserService.verifierConnection(navigate, setConnectedUser);
        fetchProfile()
    }, []);
    
    return (
        <>
            <div>Hello {profile.nameInProfile} </div>
            {profile.pdp && (
                        <img src={profile.pdp} alt="profile" />
                    )}
        </>
        
    );
}

