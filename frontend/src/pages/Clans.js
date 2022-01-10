import { Fragment, useEffect, useState } from "react";

const Clans = () => {
  const [clans, setClans] = useState(null);
  let display;

  useEffect(() => {
    fetch("http://localhost:8080/clans")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch user data");
        }
        return res.json();
      })
      .then((resData) => {
        setClans(resData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (clans?.length > 0) {
    display = clans.map((clan) => {
      return (
        <div key={clan.clanID}>
          <p className="text-center">clanID: {clan.clanID}</p>
          <p className="text-center">clanName: {clan.clanName}</p>
        </div>
      );
    });
  } else {
    display = <p className="text-center">Loading...</p>;
  }

  return (
    <Fragment>
      <h1>Clans</h1>
      {display}
    </Fragment>
  );
};

export default Clans;
