import { accordionSummaryClasses } from '@mui/material';
import axios from 'axios';
const Add_Student_Url ="http://localhost:8080/admin/addStudent";
const View_Student_Url="http://localhost:8080/admin/viewStudents";
// const edit_Institute_Url="";
const delete_Student_Url="http://localhost:8080/admin/deleteStudent";

class StudentService{
    getStudent(){
        return axios.get(View_Student_Url);
    }

    addStudent(state){
        return axios.post(Add_Student_Url,state);
    }
    deleteStudent(stateid){
        return axios.delete(delete_Student_Url+'/'+stateid);
    }
}
export default new StudentService();