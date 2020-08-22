import React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './components/Logo';
import { StyleConstants } from 'styles/StyleConstants';
import { PageWrapper } from '../../components/PageWrapper';
import { UserMenuPill } from './components/UserMenuPill';
import { ShoppingCart } from './components/ShoppingCart';
import { SearchBar } from './components/SearchBar';

export function NavBarFilter() {
  return (
    <Wrapper>
      <PageWrapper>
        <Logo />
        <SearchBar />
        <RightWrapper>
          <ShoppingCart style={{ marginLeft: 10 }} />
          {/* <UserMenuPill /> */}
        </RightWrapper>
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.background};
  z-index: 2;

  /* @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.1)',
      )};
  } */

  ${PageWrapper} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18) !important;
  }
`;

const RightWrapper = styled.div`
  display: flex;
`;
