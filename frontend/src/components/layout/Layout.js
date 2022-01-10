import { Fragment } from "react";

import MainNavigator from "./MainNavigator";

const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <MainNavigator isLoggedIn={props.isLoggedIn} />
      </header>
      <main>
        <div className="container">{props.children}</div>
      </main>
    </Fragment>
  );
};

export default Layout;
