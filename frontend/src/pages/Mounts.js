import { Fragment, useEffect, useState } from "react";

const Mounts = () => {
  const [mounts, setMounts] = useState(null);
  let display;

  useEffect(() => {
    fetch("http://localhost:8080/mounts")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch user data");
        }
        return res.json();
      })
      .then((resData) => {
        setMounts(resData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (mounts?.length > 0) {
    display = mounts.map((mount) => {
      return (
        <div key={mount.mountID}>
          <p className="text-center">mountID: {mount.mountID}</p>
          <p className="text-center">animalItemName: {mount.animalItemName}</p>
          <p className="text-center">mountName: {mount.mountName}</p>
          <p className="text-center">mountSpeed: {mount.mountSpeed || 10}</p>
        </div>
      );
    });
  } else {
    display = <p className="text-center">Loading...</p>;
  }

  return (
    <Fragment>
      <h1>Mounts</h1>
      {display}
    </Fragment>
  );
};

export default Mounts;
