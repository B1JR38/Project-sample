import { accordionSummaryClasses } from '@mui/material';
import axios from 'axios';
const Add_Institute_Url ="http://localhost:8080/admin/addInstitute";
const View_Institute_Url="http://localhost:8080/admin/viewInstitutes";
const View_Institutebyid_Url="http://localhost:8080/admin/viewInstitute";
const edit_Institute_Url="http://localhost:8080/admin/editInstitute";
const delete_Institute_Url="http://localhost:8080/admin/deleteInstitute";

class InstituteService{
    getHeader=()=>{
        let config={
            headers:{
                "Access-Contro-Allow-Origin":"*",
            },
        };
        return config;
    }
    getInstitute(){
        return axios.get(View_Institute_Url);
    }

    addInstitute(state){
        return axios.post(Add_Institute_Url,state);
    }
    editInstitute(state,id){
        return axios.put(edit_Institute_Url+'/'+id,state,this.getHeader());
    }
    deleterInstitute(stateid){
        return axios.delete(delete_Institute_Url+'/'+stateid);
    }
    getinstitutebyid(id){
        return axios.get(View_Institutebyid_Url+'/'+id);
    }
}
export default new InstituteService();