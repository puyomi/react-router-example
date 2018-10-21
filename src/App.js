import React from "react";
import { Route, Link } from "react-router-dom";

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contact</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={Contacts} />
  </header>
);

const Welcome = () => <h1>Welcome to the App!!</h1>;

const Contacts = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to="/contacts/puyomi">puyomi</Link>
      </li>
      <li>
        <Link to="/contacts/heresh">heresh</Link>
      </li>
      <li>
        <Link to="/contacts/nomadcoder">nomadcoder</Link>
      </li>
    </ul>
    <Route
      exact
      path={`${match.path}`}
      render={() => <h3>Please select a contact</h3>}
    />
    <Route path={`${match.path}/:contactName`} component={Contact} />
  </div>
);

const Contact = ({ match }) => `Your friends name is ${match.params.contactName}`;

export default App;
