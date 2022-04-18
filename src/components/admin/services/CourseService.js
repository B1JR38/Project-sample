import axios from 'axios';
const Add_Course_Url ="http://localhost:8080/admin/addCourse";
const view_Course_Url="http://localhost:8080/admin/viewCourses";
const view_Coursebyid_Url="http://localhost:8080/admin/viewCourse";
const edit_Course_Url="http://localhost:8080/admin/editCourse";
const delete_Course_Url="http://localhost:8080/admin/deleteCourse"

class CourseService{
    getHeader=()=>{
        let config={
            headers:{
                "Access-Contro-Allow-Origin":"*",
            },
        };
        return config;
    }
    getCourse(){
        return axios.get(view_Course_Url);
    }
    addCourse(state){
        return axios.post(Add_Course_Url,state);
    }
    editCourse(state,stateid){
        return axios.put(edit_Course_Url+'/'+stateid,state,this.getHeader());
    }
    deleteCourse(stateid){
        return axios.delete(delete_Course_Url+'/'+stateid);
    }
    getcoursebyid(id){
        return axios.get(view_Coursebyid_Url+'/'+id);
    }
}
export default new CourseService();