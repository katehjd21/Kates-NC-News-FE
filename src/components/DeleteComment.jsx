import { useContext, useState } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import Error from "./Error";

function DeleteComment({ setComments, comment, decrementCommentCount }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasError, setHasError] = useState(null);
  const { user } = useContext(UserContext);

  function handleDelete(comment_id) {
    if (user.username === comment.author) {
      setIsDeleting(true);
      deleteComment(comment_id)
        .then(() => {
          setHasError(null);
          setIsDeleting(false);
          decrementCommentCount();
          setComments((currComments) => {
            return currComments.filter(
              (comment) => comment.comment_id !== comment_id
            );
          });
        })
        .catch((err) => {
          setHasError("Unable to delete comment. Please try again later!");
          setIsDeleting(false);
        });
    }
  }

  function handleClick() {
    handleDelete(comment.comment_id);
  }

  if (user.username !== comment.author) {
    return null;
  } else {
    return (
      <>
        {hasError ? <Error message={hasError} /> : null}
        <button
          type="button"
          id="delete-btn"
          onClick={handleClick}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </>
    );
  }
}
export default DeleteComment;
