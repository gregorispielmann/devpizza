import React from 'react';
import {
  BrowserRouter,
  Route,
  RouteProps,
  Switch,
  useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import StepOne from '../pages/StepOne';
import StepTwo from '../pages/StepTwo';
import StepThree from '../pages/StepThree';
// import StepTwo from '../pages/StepTwo';

import './styles.css';
import Finish from '../pages/Finish';
import Loading from '../components/Loading';
import { useLoading } from '../hooks/Loading';

const AnimatedApp: React.FC = () => {
  const location = useLocation();
  return (
    <div className="container">
      <TransitionGroup>
        <CSSTransition
          classNames="page"
          timeout={1000}
          key={location.key}
          onExit={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/step-one" component={StepOne} />
            <Route exact path="/step-two" component={StepTwo} />
            <Route exact path="/step-three" component={StepThree} />
            <Route exact path="/finish" component={Finish} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

const Routes: React.FC<RouteProps> = () => {
  const { loading } = useLoading();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="*">
          {loading && <Loading />}
          <Footer />
          <AnimatedApp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
