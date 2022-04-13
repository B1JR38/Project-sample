import axios from 'axios';

const Add_user_Url='http://localhost:8080/user/signup';
const login_user_Url='http://localhost:8080/user/login';
class UserService{

    adduser(state){
        return axios.post(Add_user_Url,state);
    }
    userlogin(state){
        return axios.post(login_user_Url,state);
    }
}
export default new UserService();