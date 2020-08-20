import React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
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
  style?: any;
}
export const SideMenu: React.FC<ISideMenu> = ({onSelect, onToggle, ...props}) =>{

  return (
    <SideNav
      onSelect={onSelect}
      onToggle={onToggle}
      style={{ backgroundColor: '#262626', transition: 'none', width: '104px' }}
    >
      <SideNav.Toggle />
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
