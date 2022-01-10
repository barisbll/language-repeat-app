import { Link, useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const submitButtonHandler = (e) => {
    e.preventDefault();
    props.setIsLoggedIn(true);

    // Validation Check
    // Send Post Request

    // If status code 200 or 201
    history.push("/welcome");
  };

  return (
    <div>
      <form className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
        <div className="form-group mt-5">
          <label htmlFor="name">Username:</label>
          <input
            className="form-control"
            type="text"
            id="name"
            placeholder="Enter Name:"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Enter Password:"
          />
        </div>
        <Link to="/register" className="mb-3 d-block mt-3">
          I don't have an account
        </Link>
        <button
          className="btn btn-primary btn-block"
          type="submit"
          onClick={submitButtonHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
