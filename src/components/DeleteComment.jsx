import { useContext, useState } from "react";
import { deleteComment } from "../api";
import { UserContext } from "../contexts/UserContext";

function DeleteComment({ setComments, comment }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { user } = useContext(UserContext);

  function handleDelete(comment_id) {
    if (user.username === comment.author) {
      setIsDeleting(true);
      deleteComment(comment_id)
        .then(() => {
          setHasError(false);
          setIsDeleting(false);
          setComments((currComments) => {
            return currComments.filter(
              (comment) => comment.comment_id !== comment_id
            );
          });
        })
        .catch((err) => {
          setHasError(true);
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
        {hasError ? (
          <p>Oops, something went wrong! Please try again...</p>
        ) : null}
        <button type="button" id="delete-btn" onClick={handleClick}>
          {isDeleting ? "Deleting" : "Delete"}
        </button>
      </>
    );
  }
}
export default DeleteComment;
