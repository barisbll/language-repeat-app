import { useHistory } from "react-router-dom";

const Register = (props) => {
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
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            id="name"
            placeholder="Enter Email:"
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
        <button
          className="btn btn-primary btn-block mt-2"
          type="submit"
          onClick={submitButtonHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
