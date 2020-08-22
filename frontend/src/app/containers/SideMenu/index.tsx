import React from 'react';

import { Icon } from '@iconify/react-with-api';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import styled from 'styled-components/macro';

import './SideMenu.css';

interface ISideMenu {
  onSelect: Function;
  onToggle: Function;
  isMenuCollapsed: boolean;
  style?: any;
}

// const changeToggleButton = (obj, isMenuCollapsed) => {
//   return ( <button className="sidenavbar_toggle" onClick={obj.onClick}> {expanded ? ( <IoIosArrowDropleftCircle size="2em" /> ) : ( <IoIosArrowDroprightCircle size="2em" /> )} </button> );
// }
export const SideMenu: React.FC<ISideMenu> = ({
  onSelect,
  onToggle,
  isMenuCollapsed,
  ...props
}) => {
  return (
    <SideNav
      onSelect={onSelect}
      onToggle={onToggle}
      style={{ backgroundColor: '#262626', transition: 'none', width: '104px' }}
    >
      <SideNav.Toggle
        componentClass={obj => {
          return (
            <div
              style={{
                width: `${!isMenuCollapsed ? '104px' : '240px'}`,
                height: '104px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={obj.onClick}
            >
              <Icon
                icon="carbon:wheat"
                style={{ color: '#e8e8e8', width: '60px', height: '60px' }}
              />
            </div>
          );
        }}
      />
      {/* </div> */}
      <SideNav.Nav defaultSelected="dashboard">
        <NavHeading
          className={
            'w-100 ' + (isMenuCollapsed ? 'text-left p-l-1' : 'text-center')
          }
        >
          Main
        </NavHeading>
        <NavItem eventKey="dashboard">
          <NavIcon>
            <Icon icon="bx-bxs-dashboard" style={{ fontSize: '1.75rem' }} />
          </NavIcon>
          <NavText>Dashboard</NavText>
        </NavItem>
        <NavHeading
          className={
            'w-100 ' + (isMenuCollapsed ? 'text-left p-l-1' : 'text-center')
          }
        >
          Listings
        </NavHeading>
        <NavItem eventKey="listing/add">
          <NavIcon>
            <Icon icon="carbon-add-alt" style={{ fontSize: '1.75rem' }} />
          </NavIcon>
          <NavText>Add Listing</NavText>
        </NavItem>
        <NavItem eventKey="listings">
          <NavIcon>
            <Icon icon="fa-regular:list-alt" style={{ fontSize: '1.75rem' }} />
          </NavIcon>
          <NavText>Listings</NavText>
        </NavItem>
        <NavItem eventKey="listing/own">
          <NavIcon>
            <Icon icon="ri-stack-line" style={{ fontSize: '1.75rem' }} />
          </NavIcon>
          <NavText>My Listings</NavText>
        </NavItem>
        <NavHeading
          className={
            'w-100 ' + (isMenuCollapsed ? 'text-left p-l-1' : 'text-center')
          }
        >
          Account
        </NavHeading>
        <NavItem eventKey="profile">
          <NavIcon>
            <Icon icon="vs-profile" style={{ fontSize: '1.75rem' }} />
          </NavIcon>
          <NavText>My Profile</NavText>
        </NavItem>
        <NavItem eventKey="logout">
          <NavIcon>
            <Icon
              icon="ant-design:logout-outlined"
              style={{ fontSize: '1.75rem' }}
            />
          </NavIcon>
          <NavText>Logout</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

const NavHeading = styled.div`
  margin-top: 10px;
  display: block;
  color: #999;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 1px;
`;
