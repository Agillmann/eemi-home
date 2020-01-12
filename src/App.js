import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Layout from './components/Layouts/Layout';
import HomePage from './components/Home/HomePage';
import MapPage from './components/Map/MapPage';
import EventsPage from './components/Events/EventsPage';
import NewsPage from './components/News/NewsPage';

import Page404 from './components/Errors/Page404';

import './App.css';
const App = ({ location }) => {
  return (
    <Layout>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 400, exit: 400 }}
          classNames={'fade'}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route path="/" exact component={HomePage} />
              <Route path="/map" exact component={MapPage} />
              <Route path="/events" exact component={EventsPage} />
              <Route path="/news" exact component={NewsPage} />
              <Route component={Page404} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
};

App.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};
export default withRouter(App);
