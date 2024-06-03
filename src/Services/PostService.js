import axios from 'axios'
const PostService = {}

PostService.ajouterPost = async (idAuthor,headers,formData) => {
    return await axios.post(`http://127.0.0.1:4000/Post/${idAuthor}/Ajouter`,formData, {headers })
}

PostService.getPostes = async (authorId) => {
    return await axios.get(`http://127.0.0.1:4000/Post/${authorId}/Lister`)
}



export default PostService;