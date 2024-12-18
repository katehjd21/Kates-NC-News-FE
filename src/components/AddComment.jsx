import { addCommentByArticleId } from "../api";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Button from "@mui/material/Button";

function AddComment({ setComments, article_id }) {
  const { user } = useContext(UserContext);
  const [submitPending, setSubmitPending] = useState(false);
  const [error, setError] = useState(false);
  const [newComment, setNewComment] = useState("");

  function handleChange(e) {
    setNewComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitPending(true);

    addCommentByArticleId(article_id, {
      username: user.username,
      body: newComment,
    })
      .then((newlyAddedComment) => {
        setComments((currComments) => [newlyAddedComment, ...currComments]);
        setSubmitPending(false);
        setNewComment("");
        setError(false);
      })
      .catch(() => {
        setError(true);
        setSubmitPending(false);
      });
  }

  return (
    <div>
      {error ? (
        <p>"Oops, something went wrong! Please try again later..."</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <input
          id="add-comment-input"
          name="comment"
          type="text"
          placeholder="Please add a new comment"
          value={newComment}
          onChange={handleChange}
          required
        />
        <Button variant="contained" className="btn" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddComment;
