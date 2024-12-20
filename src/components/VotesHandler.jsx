import { useState } from "react";
import { updateVotesByArticleId } from "../api";
import Error from "./Error";
import { Button } from "@mui/material";

function VotesHandler({ votes, article_id }) {
  const [votesAdded, setVotesAdded] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  function handleToggleClick() {
    setHasError(null);
    setIsLoading("Updating...");

    const inc_votes = isToggled ? -1 : 1;

    setVotesAdded((currVotesAdded) => {
      return currVotesAdded + inc_votes;
    });

    updateVotesByArticleId(article_id, inc_votes)
      .then(() => {
        setIsLoading(null);
        setIsToggled(!isToggled);
      })
      .catch(() => {
        setIsLoading(null);
        setVotesAdded((currVotesAdded) => {
          return currVotesAdded - inc_votes;
        });
        setHasError(
          `Your vote was unable to be ${
            inc_votes > 0 ? "added" : "removed"
          }. Please try again later!`
        );
      });
  }

  return (
    <>
      <p id="votes">Votes: {votes + votesAdded}</p>
      {hasError ? <Error message={hasError} /> : null}

      <Button
        variant="contained"
        onClick={handleToggleClick}
        className="toggle-button"
      >
        {isLoading ? "Updating..." : isToggled ? "Unvote" : "Vote"}
      </Button>
    </>
  );
}

export default VotesHandler;
