import axios from 'axios';

const Add_admin_Url='http://localhost:8080/admin/signup';
const login_admin_Url='http://localhost:8080/admin/login';
class AdminService{

    addadmin(state){
        return axios.post(Add_admin_Url,state);
    }
    adminlogin(state){
        return axios.post(login_admin_Url,state);
    }
}
export default new AdminService();