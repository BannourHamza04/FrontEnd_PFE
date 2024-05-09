import axios from 'axios'
const ProfilService = {}

ProfilService.ajouterProfil = async (data) => {

    return await axios.post('http://127.0.0.1:4000/Profil/Ajouter', data)

    }

ProfilService.updateProfil = async (data,idProfile) => {

    return await axios.post('http://127.0.0.1:4000/Profil/${idProfile}/update', data)
}

ProfilService.getProfilByAuthorId = async (idAuthorProfil) => {
    return await axios.get(`http://127.0.0.1:4000/Profil/${idAuthorProfil}/getProfilByAuthorId`)
}

export default ProfilService;
