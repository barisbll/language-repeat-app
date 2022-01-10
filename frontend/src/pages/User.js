import { Fragment, useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/user")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch user data");
        }
        return res.json();
      })
      .then((resData) => {
        setUser(resData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let userDataDisplay;

  if (user) {
    userDataDisplay = (
      <Fragment>
        <p className="text-center">UserId: {user.userID}</p>
        <p className="text-center">overallScore: {user.overallScore}</p>
        <p className="text-center">gender: {user.gender}</p>
        <p className="text-center">username: {user.username}</p>
        <p className="text-center">email: {user.email}</p>
        <p className="text-center">password: {user.password}</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <h1>User</h1>
      <div className="row text-center">
        {user ? userDataDisplay : <p>Fetching Data...</p>}
      </div>
    </Fragment>
  );
};

export default User;
