import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Animals from "./pages/Animals";
import Clans from "./pages/Clans";
import Errors from "./pages/Errors";
import Items from "./pages/Items";
import Mounts from "./pages/Mounts";
import PageNotFound from "./pages/PageNotFound";
import Repeat from "./pages/Repeat";
import User from "./pages/User";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Layout isLoggedIn={isLoggedIn}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/register">
          <Register setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/animals">
          {isLoggedIn ? <Animals /> : <Redirect to="/login" />}
        </Route>
        <Route path="/clans">
          {isLoggedIn ? <Clans /> : <Redirect to="/login" />}
        </Route>
        <Route path="/errors">
          {isLoggedIn ? <Errors /> : <Redirect to="/login" />}
        </Route>
        <Route path="/items">
          {isLoggedIn ? <Items /> : <Redirect to="/login" />}
        </Route>
        <Route path="/mounts">
          {isLoggedIn ? <Mounts /> : <Redirect to="/login" />}
        </Route>
        <Route path="/repeat">
          {isLoggedIn ? <Repeat /> : <Redirect to="/login" />}
        </Route>
        <Route path="/user">
          {isLoggedIn ? <User /> : <Redirect to="/login" />}
        </Route>
        <Route path="/log-out">
          {isLoggedIn ? (
            <Logout setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
