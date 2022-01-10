import { useHistory } from "react-router-dom";

const Logout = (props) => {
  props.setIsLoggedIn(false);

  const history = useHistory();
  history.push("/welcome");

  return <p className="text-center">Logging out...</p>;
};

export default Logout;
