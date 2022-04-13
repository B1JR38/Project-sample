import { accordionSummaryClasses } from '@mui/material';
import axios from 'axios';
const Add_Institute_Url ="http://localhost:8080/admin/addInstitute";
const View_Institute_Url="http://localhost:8080/admin/viewInstitutes";
const edit_Institute_Url="";
const delete_Institute_Url="http://localhost:8080/admin/deleteInstitute";

class InstituteService{
    getInstitute(){
        return axios.get(View_Institute_Url);
    }

    addInstitute(state){
        return axios.post(Add_Institute_Url,state);
    }
    deleterInstitute(stateid){
        return axios.delete(delete_Institute_Url+'/'+stateid);
    }
}
export default new InstituteService();