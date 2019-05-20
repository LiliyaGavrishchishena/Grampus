import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// configs
import routes from '../configs/routes';
// components
import AppNav from './AppHeader/AppNav';
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
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  render() {
    return (
      <div>
        <AppNav />
        <Suspense>
          <Switch>
            <Route exact path={routes.BUSINESS} component={AsyncBusinessPage} />
            <Route exact path={routes.FEATURES} component={AsyncFeaturesPage} />
            <Route exact path={routes.PRISING} component={AsyncPrisingPage} />
            <Route exact path={routes.ABOUT} component={AsyncAboutUsPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
