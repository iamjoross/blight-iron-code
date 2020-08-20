import React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { Icon } from '@iconify/react-with-api';

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';

interface ISideMenu {
  onSelect: Function;
  onToggle: Function;
  isMenuCollapsed: boolean;
  style?: any;
}

// const changeToggleButton = (obj, isMenuCollapsed) => {
//   return ( <button className="sidenavbar_toggle" onClick={obj.onClick}> {expanded ? ( <IoIosArrowDropleftCircle size="2em" /> ) : ( <IoIosArrowDroprightCircle size="2em" /> )} </button> );
// }
export const SideMenu: React.FC<ISideMenu> = ({onSelect, onToggle, isMenuCollapsed,...props}) =>{

  return (
    <SideNav
      onSelect={onSelect}
      onToggle={onToggle}
      style={{ backgroundColor: '#262626', transition: 'none', width: '104px' }}
    >
      <div style={{ width: '104px', height: '104px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <SideNav.Toggle componentClass={(obj) => {
          return (
            <Icon icon="carbon:wheat" style={{ color: "#e8e8e8", width: '60px', height: '60px' }} onClick={obj.onClick}/>
          )
        }}
        />
      </div>
      <SideNav.Nav defaultSelected="dashboard">
        <NavItem eventKey="dashboard">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>Dashboard</NavText>
        </NavItem>
        <NavItem eventKey="test">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>Test</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
