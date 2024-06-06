import axios from 'axios'
const PostService = {}

PostService.ajouterPost = async (idAuthor,headers,formData) => {
    return await axios.post(`http://127.0.0.1:4000/Post/${idAuthor}/Ajouter`,formData, {headers })
}

PostService.getPostes = async (authorId) => {
    return await axios.get(`http://127.0.0.1:4000/Post/${authorId}/Lister`)
}

PostService.getCommentsPost = async (postId) => {
    return await axios.get(`http://127.0.0.1:4000/Post/${postId}/listCommentsPost`)
}

PostService.addCommentToPost = async (postId,comment) => {
    return await axios.post(`http://127.0.0.1:4000/Post/${postId}/addComment`,comment)
}

PostService.likeAndDisLike = async (postId,liker) => {
    return await axios.get(`http://127.0.0.1:4000/Post/${postId}/likeAndDisLike/${liker}`,liker)
}

PostService.ifIsLikePost = async (postId,liker) => {
    return await axios.get(`http://127.0.0.1:4000/Post/${postId}/ifIsLikePost/${liker}`,liker)
}

PostService.isAuthorPost = async (postId,authorId) => {
    return await axios.get(`http://127.0.0.1:4000/Post/${postId}/isAuthorPost/${authorId}`,authorId)
}

export default PostService;