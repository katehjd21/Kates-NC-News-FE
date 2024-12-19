import { useState } from "react";
import { incrementVotesByArticeId, decrementVotesByArticeId } from "../api";
import Button from "@mui/material/Button";
import Error from "./Error";

function VotesHandler({ votes, article_id }) {
  const [votesAdded, setVotesAdded] = useState(0);
  const [hasError, setHasError] = useState(null);

  function handleIncrementClick() {
    setHasError(null);
    incrementVotesByArticeId(article_id).catch(() => {
      setVotesAdded((currVotesAdded) => {
        return currVotesAdded - 1;
      });
      setHasError("Your vote was unable to be added. Please try again later!");
    });
    setVotesAdded((currVotesAdded) => {
      return currVotesAdded + 1;
    });
  }

  function handleDecrementClick() {
    setHasError(null);
    decrementVotesByArticeId(article_id).catch(() => {
      setVotesAdded((currVotesRemoved) => {
        return currVotesRemoved + 1;
      });
      setHasError(
        "Your vote was unable to be removed. Please try again later!"
      );
    });
    setVotesAdded((currVotesRemoved) => {
      return currVotesRemoved - 1;
    });
  }

  return (
    <>
      <p id="votes">Votes: {votes + votesAdded}</p>
      {hasError ? <Error message={hasError} /> : null}

      <Button
        variant="contained"
        onClick={handleIncrementClick}
        className="btn"
      >
        Add Vote
      </Button>
      <Button
        variant="contained"
        onClick={handleDecrementClick}
        className="btn"
      >
        Remove Vote
      </Button>
    </>
  );
}

export default VotesHandler;
