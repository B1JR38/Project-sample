import React from 'react'
import Search from '../../web components/search/Search';
import InstituteList from '../../web components/instituteList/InstituteList';
import './institutePage.css';
const InstitutePage = () => {
  
  return (
    <div className='institutepgedesign'>
      <Search />

        <InstituteList />
      
      </div>
  )
}

export default InstitutePage
