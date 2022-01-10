import { Fragment, useEffect, useState } from "react";

const Items = () => {
  const [items, setItems] = useState(null);
  let display;

  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch user data");
        }
        return res.json();
      })
      .then((resData) => {
        setItems(resData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (items?.length > 0) {
    display = items.map((item) => {
      return (
        <div key={item.itemID}>
          <p className="text-center">userItemID: {item.userItemID}</p>
          <p className="text-center">userItemName: {item.userItemName}</p>
        </div>
      );
    });
  } else {
    display = <p className="text-center">Loading...</p>;
  }

  return (
    <Fragment>
      <h1>Items</h1>
      {display}
    </Fragment>
  );
};

export default Items;
