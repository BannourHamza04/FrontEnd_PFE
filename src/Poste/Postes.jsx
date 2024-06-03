import React, { useEffect, useState } from 'react';
import PostService from '../Services/PostService';
import Poste from './Poste'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import ProfilService from '../Services/ProfilService';

export default function Postes() {

    const token = Cookies.get('access_token');
    const author = JSON.parse(localStorage.getItem('user_data'))
    const [postes, setPostes] = useState([]);
    const [profilAuthor, setProfilAuthor] = useState([]);
    const navigate = useNavigate();

    // Récupération des Postes
    const getPostes = async () => {
        try {
            const authorId = author.id
            const response = await PostService.getPostes(authorId);
            if (response.status === 200) {
                setProfilAuthor(response.data.authorProfil)
                setPostes(response.data.postList);
                console.log(postes)
            } else {
                console.log(response.data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    // Affichage des Postes
    const displayPostes = () => {
        console.log(postes)
        if (postes.length === 0) {
            return <p>Aucun Poste trouvé</p>;
        } else {
            return postes.map((post, key) => {
                return <Poste post={post} key={key} />;
            });
        }
    };

    useEffect(() => {
        if(!token){
            navigate('/Login')
        }
        getPostes();
    }, []);

    return (
        <>{displayPostes()}</>
    )
}
