import { accordionSummaryClasses } from '@mui/material';
import axios from 'axios';
const Add_Student_Url ="http://localhost:8080/admin/addStudent";
const View_Student_Url="http://localhost:8080/admin/viewStudents";
const View_Studentid_Url="http://localhost:8080/admin/viewStudent";
const edit_Student_Url="http://localhost:8080/admin/editStudent";
const delete_Student_Url="http://localhost:8080/admin/deleteStudent";
// const Add_Admission_Url="http://localhost:8080/user/addAdmission";

class StudentService{
    getHeader=()=>{
        let config={
            headers:{
                "Access-Contro-Allow-Origin":"*",
            },
        };
        return config;
    }
    getStudent(){
        return axios.get(View_Student_Url);
    }
    getStudentByid(id){
        return axios.get(View_Studentid_Url+'/'+id);
    }

    addStudent(state){
        return axios.post(Add_Student_Url,state);
    }
    editstudent(state,id){
        return axios.put(edit_Student_Url+'/'+id,state,this.getHeader());
    }
    deleteStudent(stateid){
        return axios.delete(delete_Student_Url+'/'+stateid);
    }
    // addadmission(id,state){
    //     return axios.post(Add_Admission_Url+'/'+id,state);
    // }
}
export default new StudentService();