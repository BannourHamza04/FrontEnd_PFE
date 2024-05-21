import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilService from '../Services/ProfilService';
import Cookies from 'js-cookie';
export default function SessionTest() {

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

            const response = await ProfilService.getProfilByAuthorId(user.id, headers)
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
        <>
            <div>Hello {profile.nameInProfile} </div>
            {profile.pdp && (
                <img src={profile.pdp} alt="profile" />
            )}
        </>

    );
}

