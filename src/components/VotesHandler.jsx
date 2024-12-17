import { useState } from "react";
import { incrementVotesByArticeId, decrementVotesByArticeId } from "../api";
import Button from "@mui/material/Button";

function VotesHandler({ votes, article_id }) {
  const [votesAdded, setVotesAdded] = useState(0);
  const [error, setError] = useState(null);

  function handleIncrementClick() {
    setError(null);
    incrementVotesByArticeId(article_id).catch(() => {
      setVotesAdded((currVotesAdded) => {
        return currVotesAdded - 1;
      });
      setError("Your vote was unable to be added. Please try again!");
    });
    setVotesAdded((currVotesAdded) => {
      return currVotesAdded + 1;
    });
  }

  function handleDecrementClick() {
    setError(null);
    decrementVotesByArticeId(article_id).catch(() => {
      setVotesAdded((currVotesRemoved) => {
        return currVotesRemoved + 1;
      });
      setError("Your vote was unable to be removed. Please try again!");
    });
    setVotesAdded((currVotesRemoved) => {
      return currVotesRemoved - 1;
    });
  }

  return (
    <>
      <p id="votes">Votes: {votes + votesAdded}</p>
      {error ? <p>{error}</p> : null}

      <Button
        variant="contained"
        onClick={handleIncrementClick}
        className="vote-btn"
      >
        Add Vote
      </Button>
      <Button
        variant="contained"
        onClick={handleDecrementClick}
        className="vote-btn"
      >
        Remove Vote
      </Button>
    </>
  );
}

export default VotesHandler;
