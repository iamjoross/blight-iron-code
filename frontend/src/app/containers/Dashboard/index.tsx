import React from 'react';
import styled from 'styled-components/macro';

import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import { Header } from '../Header';
import { SideMenu } from '../SideMenu';
import { MainContent } from '../MainContent';

export const Dashboard = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Header></Header>
      <SideMenu></SideMenu>
      <MainContent></MainContent>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  > ${PageWrapper} {
    min-height: calc(100vh - 80px);
    width: 100%;
    display: flex;
  }
`;
