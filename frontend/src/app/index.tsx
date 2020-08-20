/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components/macro';

import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { Dashboard } from './containers/Dashboard/Loadable';
import { CreateListingPage } from './containers/CreateListingPage/Loadable';
import { ListingBidPage } from './containers/ListingBidPage/Loadable';
import { SideMenu } from './containers/SideMenu';
import { Header } from './containers/Header';
import { StateProvider } from './state';

export const App = () => {
  const [isMenuCollapsed, toggleMenuCollapsed] = React.useState(false);
  const initialState = {};

  interface IWrapperProps {
    isMenuCollapsed?: Boolean;
  }

  const MainContentWrapper = styled.div<IWrapperProps>`
    position: absolute;
    top: 104px;
    ${({ isMenuCollapsed }) => isMenuCollapsed ? 'left: 104px;' : 'left: 240px;'}
    ${({ isMenuCollapsed }) => isMenuCollapsed ? 'width: calc(100% - 104px);' : 'width: calc(100% - 240px);'}
    -webkit-transtition: left .3s ease-in-out, right .3s ease-in-out;
    transition: left .3s ease-in-out, right .3s ease-in-out;
  `;

  const HeaderWrapper = styled.div<IWrapperProps>`
    position: absolute;
    ${({ isMenuCollapsed }) => isMenuCollapsed ? 'left: 104px;' : 'left: 240px;'}
    ${({ isMenuCollapsed }) => isMenuCollapsed ? 'width: calc(100% - 104px);' : 'width: calc(100% - 240px);'}
    -webkit-transtition: left .3s ease-in-out, right .3s ease-in-out;
    transition: left .3s ease-in-out, right .3s ease-in-out;
    background: #ffffff !important;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.13);
    nav {
      height: 104px;
    }
    a {
      color: #262626 !important;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 29px;
    }
  `;
>>>>>>> 8e89dd1229b2fbfcd955e71e95d29dfdb34bb876

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/create-listing'}
          component={CreateListingPage}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/listing-bids'}
          component={ListingBidPage}
        />
        {/* <Route
          exact
          path={process.env.PUBLIC_URL + '/dashboard'}
          component={Dashboard}
        /> */}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
=======
    <StateProvider initialState={initialState} reducer={() => {}}>
      <BrowserRouter>
        <Route render={({location, history}) => (
          <>
            <Helmet
              titleTemplate="%s - React Boilerplate"
              defaultTitle="React Boilerplate"
            >
              <meta name="description" content="A React Boilerplate application" />
            </Helmet>
            <SideMenu
              onSelect={selected => {
                const to = '/' + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
              onToggle={(val) => toggleMenuCollapsed(!isMenuCollapsed)}
            />
            <HeaderWrapper isMenuCollapsed={!isMenuCollapsed}>
              <Header title="Dashboard" bg="light"/>
            </HeaderWrapper>

            <MainContentWrapper isMenuCollapsed={!isMenuCollapsed}>
              <Switch>
                <Route path={[process.env.PUBLIC_URL + "/", process.env.PUBLIC_URL + "/dashboard"]} exact component={props => <Dashboard />} />
                <Route path={"/test"} exact component={props => <HomePage />} />
                <Route path='*' exact={true} component={NotFoundPage} />
              </Switch>
            </MainContentWrapper>
          </>
        )}/>
        <GlobalStyle />
      </BrowserRouter>
    </StateProvider>
>>>>>>> 8e89dd1229b2fbfcd955e71e95d29dfdb34bb876
  );
}


