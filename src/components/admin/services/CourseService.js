import axios from 'axios';
const Add_Course_Url ="";

class CourseService{
    addCourse(state){
        return axios.post(Add_Course_Url,state);
    }
}
export default new CourseService();