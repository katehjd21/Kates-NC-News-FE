import { useContext, useState } from "react";
import { deleteComment } from "../api";
import { UserContext } from "../contexts/UserContext";

function DeleteComment({ setComments, comment }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(false);
  const { user } = useContext(UserContext);

  function handleDelete(comment_id) {
    if (user.username === comment.author) {
      setIsDeleting(true);
      deleteComment(comment_id)
        .then(() => {
          setError(false);
          setIsDeleting(false);
          setComments((currComments) => {
            return currComments.filter(
              (comment) => comment.comment_id !== comment_id
            );
          });
        })
        .catch((err) => {
          setError(true);
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
        {error ? <p>Oops, something went wrong! Please try again...</p> : null}
        <button type="button" id="delete-btn" onClick={handleClick}>
          {isDeleting ? "Deleting" : "Delete"}
        </button>
      </>
    );
  }
}
export default DeleteComment;
