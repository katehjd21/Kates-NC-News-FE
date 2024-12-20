import { manipulateDateAndTime } from "../utils/utils";
import DeleteComment from "./DeleteComment";

function ArticleCommentsCard({ comments, setComments, decrementCommentCount }) {
  return (
    <>
      <ul className="comment-list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p id="comment-author">{comment.author}</p>
              <p className="date-and-time">
                {manipulateDateAndTime(comment.created_at)}
              </p>
              <p>{comment.body}</p>
              <DeleteComment
                setComments={setComments}
                comment={comment}
                decrementCommentCount={decrementCommentCount}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArticleCommentsCard;
