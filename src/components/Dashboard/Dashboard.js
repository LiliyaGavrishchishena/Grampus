import React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// components
import UserNav from '../UserNav/UserNav';

import HelpTasks from './HelpTasks/HelpTasks';
import Profile from './Profile/Profile';
import Rating from './Rating/Rating';
import Settings from './Settings/Settings';
import SmartCalendar from './SmartCalendar/SmartCalendar';
import YourTasks from './YourTasks/YourTasks';

import ProtectedRoute from '../../hocs/ProtectedRoute';

// configs
import userNavItems from '../../configs/user-nav';
import routes from '../../configs/routes';
import { authSelectors, authOperations } from '../../redux/auth';

// styles
import styles from './Dashboard.module.css';

const Dashboard = () => (
  <div className={styles.dashboard}>
    <div className={styles.menu}>
      <UserNav items={userNavItems} />
    </div>
    <div className={styles.contant}>
      <Switch>
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
      </Switch>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  exit: authOperations.signOut,
};
const options = { pure: false };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  options,
)(Dashboard);
