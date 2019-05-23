import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// configs
import routes from '../configs/routes';
import navItems from '../configs/main-nav';
import authOperations from '../redux/auth/authOperations';
// components
import AppNav from './AppHeader/AppNav/AppNav';
import MainPage from '../pages/MainPage';
import Profile from './Profile/Profile';
import Rating from './Rating/Rating';
import CompanyState from './CompanyState/CompanyState';
import YourTasks from './YourTasks/YourTasks';
import HelpTasks from './HelpTasks/HelpTasks';
import SmartCalendar from './SmartCalendar/SmartCalendar';
import Settings from './Settings/Settings';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

// styles
import './App.css';

const AsyncBusinessPage = lazy(() =>
  import('../pages/AsyncBusinessPage' /* webpackChunkName: "business-page" */),
);
const AsyncFeaturesPage = lazy(() =>
  import('../pages/AsyncFeaturesPage' /* webpackChunkName: "features-page" */),
);
const AsyncPrisingPage = lazy(() =>
  import('../pages/AsyncPrisingPage' /* webpackChunkName: "pricing-page" */),
);
const AsyncAboutUsPage = lazy(() =>
  import('../pages/AsyncAboutUsPage' /* webpackChunkName: "about-us-page" */),
);

class App extends Component {
  state = {};

  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  render() {
    return (
      <div>
        <AppNav items={navItems} />
        <Suspense fallback={MainPage}>
          <Switch>
            <Route exact path={routes.MAIN} component={MainPage} />
            <Route exact path={routes.BUSINESS} component={AsyncBusinessPage} />
            <Route exact path={routes.FEATURES} component={AsyncFeaturesPage} />
            <Route exact path={routes.PRISING} component={AsyncPrisingPage} />
            <Route exact path={routes.ABOUT} component={AsyncAboutUsPage} />
            <ProtectedRoute
              exact
              path={routes.PROFILE}
              component={Profile}
              redirectTo="/signin"
            />
            <ProtectedRoute
              exact
              path={routes.RATING}
              component={Rating}
              redirectTo="/signin"
            />
            <ProtectedRoute
              exact
              path={routes.STATE}
              component={CompanyState}
              redirectTo="/signin"
            />
            <ProtectedRoute
              exact
              path={routes.TASKS}
              component={YourTasks}
              redirectTo="/signin"
            />
            <ProtectedRoute
              exact
              path={routes.HELP}
              component={HelpTasks}
              redirectTo="/signin"
            />
            <ProtectedRoute
              exact
              path={routes.CALENDAR}
              component={SmartCalendar}
              redirectTo="/signin"
            />
            <ProtectedRoute
              exact
              path={routes.SETTINGS}
              component={Settings}
              redirectTo="/signin"
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProp = {
  getUser: authOperations.getCurrentUser,
};

export default connect(
  null,
  mapDispatchToProp,
)(App);
