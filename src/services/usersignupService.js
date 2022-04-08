import axios from 'axios';

const SIGNUP_BASE_API_URL = "http://localhost:8080/user/signup";


class usersignupService{
  getSignupData(){
        return axios.get(SIGNUP_BASE_API_URL);
  }
  
  createUser(data){
        return axios.post(SIGNUP_BASE_API_URL, data);
  }

}

export default usersignupService