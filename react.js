import React from 'react';
import './style.css';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
  Redirect,
  Prompt,
  HashRouter
} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/"> Home </Link> &nbsp;
        <Link to="/aboutus"> AboutUs </Link> &nbsp;
        <Link to="/contactus"> ContactUs </Link> &nbsp;
        <Link to="/user/3/course/7"> User </Link> &nbsp;
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/user/:userId/course/:courseId" component={User} />
          <Route exact path="*" component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  const history = useHistory();
  return (
    <>
      <h3> Home Component </h3>
      <button onClick={() => history.goBack()}> GoBack </button>
      <button onClick={() => history.goForward()}> GoForward </button>
    </>
  );
}

function AboutUs(props) {
  console.log(props);
  return (
    <>
      <h3> About Component </h3>
      <BrowserRouter>
        <Link to={`${props.match.url}/history`}> History </Link> &nbsp;
        <Link to={`${props.match.url}/branches`}> Branches </Link> &nbsp;
        <Route path={`${props.match.url}/history`} component={History} />
        <Route path={`${props.match.url}/branches`} component={Branches} />
      </BrowserRouter>{' '}
      <br /> <br />
      <button onClick={() => props.history.goBack()}> GoBack </button>
      <button onClick={() => props.history.goForward()}> GoForward </button>
    </>
  );
}

function ContactUs(props) {
  return (
    <>
      <h3> ContactUs Component </h3>
      <button onClick={() => props.history.goBack()}> GoBack </button>
      <button onClick={() => props.history.goForward()}> GoForward </button>
      <button onClick={() => props.history.replace('/user/4/course/5')}>
        {' '}
        User{' '}
      </button>
      <Prompt
        when={true}
        message={'Are you sure you want to leave this page?'}
      />
    </>
  );
}

function User(props) {
  return (
    <>
      <h3> User Component </h3>
      <button onClick={() => props.history.goBack()}> GoBack </button>
      <button onClick={() => props.history.goForward()}> GoForward </button>
    </>
  );
}

function History() {
  return <h3> History Component </h3>;
}
function Branches() {
  return <h3> Branches Component </h3>;
}
