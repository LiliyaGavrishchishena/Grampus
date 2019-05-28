import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// configs
import routes from '../configs/routes';
import navItems from '../configs/main-nav';
import authOperations from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';
// components
import AppNav from './AppHeader/AppNav/AppNav';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import Profile from './Profile/Profile';
import Rating from './Rating/Rating';
import CompanyState from './CompanyState/CompanyState';
import YourTasks from './YourTasks/YourTasks';
import HelpTasks from './HelpTasks/HelpTasks';
import SmartCalendar from './SmartCalendar/SmartCalendar';
import Settings from './Settings/Settings';
import ProtectedRoute from '../hocs/ProtectedRoute';

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
        <Suspense fallback={SignInPage}>
          <Switch>
            <Route exact path={routes.SIGNIN} component={SignInPage} />
            <Route exact path={routes.SIGNUP} component={SignUpPage} />
            <Route exact path={routes.BUSINESS} component={AsyncBusinessPage} />
            <Route exact path={routes.FEATURES} component={AsyncFeaturesPage} />
            <Route exact path={routes.PRISING} component={AsyncPrisingPage} />
            <Route exact path={routes.ABOUT} component={AsyncAboutUsPage} />
            <ProtectedRoute
              exact
              path={routes.PROFILE}
              component={Profile}
              redirectTo="/"
            />
            <ProtectedRoute
              exact
              path={routes.RATING}
              component={Rating}
              redirectTo="/"
            />
            <ProtectedRoute
              exact
              path={routes.STATE}
              component={CompanyState}
              redirectTo="/"
            />
            <ProtectedRoute
              exact
              path={routes.TASKS}
              component={YourTasks}
              redirectTo="/"
            />
            <ProtectedRoute
              exact
              path={routes.HELP}
              component={HelpTasks}
              redirectTo="/"
            />
            <ProtectedRoute
              exact
              path={routes.CALENDAR}
              component={SmartCalendar}
              redirectTo="/"
            />
            <ProtectedRoute
              exact
              path={routes.SETTINGS}
              component={Settings}
              redirectTo="/"
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  getUser: authOperations.getCurrentUser,
  exit: authOperations.signOut,
};

const options = { pure: false };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  options,
)(App);
