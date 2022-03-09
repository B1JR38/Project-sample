
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './usernavbarelements';

  
const UserNavbar = () => {
    const divStyle = {
        width: '8%',
        height:'50px',
        float: 'left',
      };
      
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/institutes' activeStyle>
            Institutes
          </NavLink>
          <NavLink to='/EnrollCourse' activeStyle>
            Enrolled Course
          </NavLink>
          <NavLink to='/logout' activeStyle>
            Log Out
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default UserNavbar;
