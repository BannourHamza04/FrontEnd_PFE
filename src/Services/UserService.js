import axios from 'axios'
const UserService = {}

UserService.register = async (data) => {

    return await axios.post('http://127.0.0.1:4000/User/Ajouter', data)

}

UserService.login = async (data) =>{
    return await axios.post('http://127.0.0.1:4000/User/login',data)
}

UserService.getUserIdSession = async () =>{
    return await axios.get('http://127.0.0.1:4000/User/getUserIdSession')
}

UserService.verifierConnection = (navigate, setConnectedUser) => {
    const user = JSON.parse(localStorage.getItem('user_data'));
    if (!user) {
        navigate('/Login');
    } else {
        setConnectedUser(user);
    }
};


export default UserService;
