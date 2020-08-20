import React from 'react';
import styled from 'styled-components/macro';

import { Helmet } from 'react-helmet-async';
import { NavBarFilter } from '../NavBarFilter';
import { PageWrapper } from 'app/components/PageWrapper';
import { ListWrapper } from './components/ListWrapper';
import { Map } from './components/Map';

export function ListingsPage() {
  return (
    <Wrapper>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBarFilter />
      <PageWrapper>
        <MainWrapper>
          <ListWrapper />
          <Map />
        </MainWrapper>
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  > ${PageWrapper} {
    min-height: calc(100vh - 80px);
    width: 100%;
    display: flex;
  }
`;

const MainWrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 80px);
`;
