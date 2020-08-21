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

import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { Dashboard } from './containers/Dashboard/Loadable';
import { CreateListingPage } from './containers/CreateListingPage/Loadable';
import { ListingBidPage } from './containers/ListingBidPage/Loadable';
import { ManageBidPage } from './containers/ManageBidPage/Loadable';
import { SideMenu } from './containers/SideMenu';
import { Header } from './containers/Header';
import { StateProvider } from './state';
import { ViewListing } from './containers/ViewListing';
import { Profile } from './containers/Profile';

export const App = () => {
  const [isMenuCollapsed, toggleMenuCollapsed] = React.useState(false);
  const initialState = {};

  interface IWrapperProps {
    isMenuCollapsed?: Boolean;
  }

  const MainContentWrapper = styled.div<IWrapperProps>`
    position: absolute;
    top: 104px;
    ${({ isMenuCollapsed }) =>
      isMenuCollapsed ? 'left: 104px;' : 'left: 240px;'}
    ${({ isMenuCollapsed }) =>
      isMenuCollapsed
        ? 'width: calc(100% - 104px);'
        : 'width: calc(100% - 240px);'}
    -webkit-transtition: left .3s ease-in-out, right .3s ease-in-out;
    transition: left 0.3s ease-in-out, right 0.3s ease-in-out;
  `;

  const HeaderWrapper = styled.div<IWrapperProps>`
    position: absolute;
    ${({ isMenuCollapsed }) =>
      isMenuCollapsed ? 'left: 104px;' : 'left: 240px;'}
    ${({ isMenuCollapsed }) =>
      isMenuCollapsed
        ? 'width: calc(100% - 104px);'
        : 'width: calc(100% - 240px);'}
    -webkit-transtition: left .3s ease-in-out, right .3s ease-in-out;
    transition: left 0.3s ease-in-out, right 0.3s ease-in-out;
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

  const [title, setTitle] = React.useState('Dashboard');

  const listings = {
    '/dashboard': {
      title: 'Dashboard',
      path: [
        process.env.PUBLIC_URL + '/',
        process.env.PUBLIC_URL + '/dashboard',
      ],
      component: <Dashboard />,
    },
    '/listing/add': {
      title: 'Add Listing',
      path: process.env.PUBLIC_URL + '/listing/add',
      component: <CreateListingPage />,
    },
    '/listing/bids/:listingId': {
      title: 'View Listings',
      path: process.env.PUBLIC_URL + '/listing/bids/:listingId',
      component: <ListingBidPage />,
    },
    '/bid/manage/:listingBidId': {
      title: 'View Listings',
      path: process.env.PUBLIC_URL + '/bid/manage/:listingBidId',
      component: <ManageBidPage />,
    },
    '/bid/create/:listingId': {
      title: 'View Listings',
      path: process.env.PUBLIC_URL + '/bid/create/:listingId',
      component: <ManageBidPage />,
    },
    '/profile': {
      title: 'Profile',
      path: process.env.PUBLIC_URL + '/profile',
      component: <Profile />,
    },
  };

  return (
    <StateProvider initialState={initialState} reducer={() => {}}>
      <BrowserRouter>
        <Route
          render={({ location, history }) => (
            <>
              <Helmet
                titleTemplate="%s - React Boilerplate"
                defaultTitle="React Boilerplate"
              >
                <meta
                  name="description"
                  content="A React Boilerplate application"
                />
              </Helmet>
              <SideMenu
                onSelect={selected => {
                  const to = '/' + selected;
                  if (location.pathname !== to) {
                    setTitle(listings[to].title);
                    history.push(to);
                  }
                }}
                onToggle={val => toggleMenuCollapsed(!isMenuCollapsed)}
                isMenuCollapsed={isMenuCollapsed}
              />
              <HeaderWrapper isMenuCollapsed={!isMenuCollapsed}>
                <Header title={title} bg="light" />
              </HeaderWrapper>
              <MainContentWrapper isMenuCollapsed={!isMenuCollapsed}>
                <Switch>
                  {Object.entries(listings).map((value, k) => {
                    return (
                      <Route
                        path={value[1].path}
                        exact
                        component={props => value[1].component}
                      />
                    );
                  })}
                  <Route path="*" exact={true} component={NotFoundPage} />
                </Switch>
              </MainContentWrapper>
            </>
          )}
        />
        <GlobalStyle />
      </BrowserRouter>
    </StateProvider>
  );
};
