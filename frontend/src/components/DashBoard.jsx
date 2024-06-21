import React from 'react';
import {useSelector} from 'react-redux'
import {
  CSidebar,
  CSidebarHeader,
  CSidebarToggler,
  CNavItem,
  CNavGroup,
  CSidebarNav,
  CSidebarBrand,
  CNavTitle,
  CBadge,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
  cilUser,
  
  cilPuzzle,
  cilSpeedometer,
  cilCloudDownload,
  cilLayers,
} from '@coreui/icons';
const DashBoard = () => {
  // const { name} = useSelector((state)=>state.login)
  const name = localStorage.getItem('name')
  return (
    <div>
      <CSidebar
        style={{ height: '100vh' }}
        className="border-end"
        colorScheme="dark"
      >
        <CSidebarHeader className="border-bottom">
          <CSidebarBrand>HairPort</CSidebarBrand>
          <CSidebarBrand>{`Welcome , ${name}`}</CSidebarBrand>
        </CSidebarHeader>
        <CSidebarNav>
          <CNavTitle>Dashboard</CNavTitle>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilUser} /> Users
          </CNavItem>
         
          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav
                dropdown
              </>
            }
          >
           
            
          </CNavGroup>
        
        </CSidebarNav>
        <CSidebarHeader className="border-top">
          <CSidebarToggler />
        </CSidebarHeader>
      </CSidebar>
    </div>
  );
};

export default DashBoard;
