import React from "react";
import { FaEdit , FaTrash } from 'react-icons/fa';
import '../Students/student.css';
const Student=()=>{
    return(
        <div className="table-container">
            <h1 className="heading">Student Details</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Course Name</th>
                        <th>Mobile Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>sai</td>
                        <td>CSE</td>
                        <td>777777777</td>
                        <td style={{cursor:'pointer'}}><FaEdit /><FaTrash/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Student;