import React from 'react'
// import Search from '../../web components/search/Search';
import InstituteList from '../../web components/instituteList/InstituteList';
import './institutePage.css';
import Button from "../../web components/buttons/Button";
import Input from "../../web components/input/Input";
// import data from "../institutedata";
const InstitutePage = () => {
  
  return (
    <div className='institutepgedesign'>
      <div className='search'>
      <Input
          className="s-field"
          inputPlaceholder={"Search Your Institutes"}
        />
        <Button className="button" BtnName={"Search"} value="Search" />
      </div>
      {/* <Search /> */}

        <InstituteList />
      
      </div>
  )
}

export default InstitutePage
