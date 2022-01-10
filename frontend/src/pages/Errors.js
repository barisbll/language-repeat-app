import { Fragment, useEffect, useState } from "react";

const Errors = () => {
  const [errors, setErrors] = useState(null);
  let display;

  useEffect(() => {
    fetch("http://localhost:8080/getErrors")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error while fetching user's errors.");
        }
        return res.json();
      })
      .then((resData) => {
        setErrors(resData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (errors) {
    display = errors.map((error, idx) => {
      return (
        <p className="text-center">
          {idx + 1}- {error.sentence}
        </p>
      );
    });
  } else {
    display = <p>No errors found</p>;
  }

  return (
    <Fragment>
      <h1>Errors</h1>
      {display}
    </Fragment>
  );
};

export default Errors;
