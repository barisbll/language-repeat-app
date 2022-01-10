import { Fragment, useEffect, useState } from "react";

const Repeat = () => {
  const [repeatList, setRepeatList] = useState(null);
  const [refreshComponent, setRefreshComponent] = useState(false);
  let displayRepetitionList;

  // Fetch all the repetition list at the beginning, and when the knowledge buttons being clicked
  useEffect(() => {
    fetch("http://localhost:8080/repeat")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch repetition list");
        }
        return res.json();
      })
      .then((resData) => {
        setRepeatList(resData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refreshComponent]);

  // fetch with sentenceId to the postMarkRepetition
  const trueButtonHandler = (e) => {
    const sentenceId = e.target.dataset.sentenceId;

    fetch("http://localhost:8080/postMarkRepetition", {
      method: "POST",
      body: JSON.stringify({ sentenceId: sentenceId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Server error, cannot mark the repetition");
        }
        return res.json();
      })
      .then((resData) => {
        setRefreshComponent(!refreshComponent);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // fetch with sentenceId to the postErrorRepetition
  const falseButtonHandler = (e) => {
    const sentenceId = e.target.dataset.sentenceId;

    fetch("http://localhost:8080/postMarkError", {
      method: "POST",
      body: JSON.stringify({ sentenceId: sentenceId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Server error, cannot mark the error");
        }
        return res.json();
      })
      .then((resData) => {
        setRefreshComponent(!refreshComponent);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Check if the initial repetition list fetch is done
  // If it is map all the objects to dom elements and store in displayRepetitionList
  if (!repeatList) {
    displayRepetitionList = <p>Loading</p>;
  } else {
    displayRepetitionList = repeatList.map((sentenceObject) => {
      if (sentenceObject.isRepeated == "1" || sentenceObject.isErrorOccured) {
        return;
      }
      return (
        <div className=" mb-5" key={sentenceObject.sentenceID}>
          <p className="text-center">{sentenceObject.sentence}</p>
          <div className="row d-flex justify-content-around">
            <button
              className="btn btn-primary col-5 "
              data-sentence-id={sentenceObject.sentenceID}
              onClick={trueButtonHandler}
            >
              I know it
            </button>
            <button
              className="btn btn-dark col-5 "
              data-sentence-id={sentenceObject.sentenceID}
              onClick={falseButtonHandler}
            >
              I don't know it :(
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <Fragment>
      <h1>Repeat</h1>
      {displayRepetitionList}
    </Fragment>
  );
};

export default Repeat;
