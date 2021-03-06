import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage'
import DeveloperSignup from './components/DeveloperSignup';
import EmployerSignup from './components/EmployerSignup';
import history from './components/history';
import Homepage from './components/Homepage';
import DeveloperAboutMe from './components/DeveloperAboutMe';
import EmployerAboutMe from './components/EmployerAboutMe';
import NavBar from './components/NavBar'

const App = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [isDevUser, setUser] = useState(false);
  const [devs, setDevs] = useState([]);
  const [inCart, setCart] = useState([]);
  const [devSelected, setSelection] = useState(false);
  const [filterOptions, setFilterOptions] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [techStack, setTechStack] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');
  const [company, setCompany] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={RegistrationPage}>
            <RegistrationPage
              isLoggedIn={isLoggedIn}
              isDevUser={isDevUser}
              username={username}
            />
          </Route>
          <Route exact path="/dev-signup" component={DeveloperSignup}>
            <DeveloperSignup
              isLoggedin={isLoggedIn}
              isDevUser={isDevUser}
              username={username}
            />
          </Route>
          <Route exact path="/employer-signup" component={EmployerSignup}>
            <EmployerSignup
              isLoggedin={isLoggedIn}
              isDevUser={isDevUser}
              username={username}
            />
          </Route>
          <Route exact path="/homepage" component={Homepage}>
            <Homepage
              devs={devs}
              inCart={inCart}
              devSelected={devSelected}
              filterOptions={filterOptions}
              username={username}
            />
          </Route>
          <Route exact path="/dev-aboutme" component={DeveloperAboutMe}>
            <DeveloperAboutMe
              username={username}
              password={password}
              email={email}
              name={name}
              techStack={techStack}
              hourlyRate={hourlyRate}
              about={about}
            />
          </Route>
          <Route exact path="/employer-aboutme" component={EmployerAboutMe}>
            <EmployerAboutMe
              username={username}
              password={password}
              email={email}
              name={name}
              company={company}
              about={about}
            />
          </Route>
          <Route exact path="/login" component={LoginPage}>
            <LoginPage
              isLoggedIn={isLoggedIn}
              isDevUser={isDevUser}
              username={username}
              password={password}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
