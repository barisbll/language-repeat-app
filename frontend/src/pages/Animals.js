import { Fragment, useEffect, useState } from "react";

const Animals = () => {
  const [animals, setAnimals] = useState(null);
  let display;

  useEffect(() => {
    fetch("http://localhost:8080/animals")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch user data");
        }
        return res.json();
      })
      .then((resData) => {
        setAnimals(resData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (animals?.length > 0) {
    display = animals.map((animal) => {
      return (
        <div key={animal.animalID}>
          <p className="text-center">animalName: {animal.animalName}</p>
          <p className="text-center">animalStrength: {animal.animalStrength}</p>
          <p className="text-center">animalHealth: {animal.animalHealth}</p>
          <p className="text-center">animalLevel: {animal.animalLevel}</p>
          <p className="text-center">
            animalClassName: {animal.animalClassName}
          </p>
          <p className="text-center">animalItemName: {animal.animalItemName}</p>
          <p className="text-center">animalID: {animal.animalID}</p>
        </div>
      );
    });
  } else {
    display = <p className="text-center">Loading...</p>;
  }

  return (
    <Fragment>
      <h1>Animals</h1>
      {display}
    </Fragment>
  );
};

export default Animals;
