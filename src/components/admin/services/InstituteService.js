import { accordionSummaryClasses } from '@mui/material';
import axios from 'axios';
const Add_Institute_Url ="";


class InstituteService{
    getInstitute(){
        return axios.get(Add_Institute_Url);
    }

    addInstitute(state){
        return axios.post(Add_Institute_Url,state);
    }
}
export default new InstituteService();