import { manipulateDateAndTime } from "../utils";
import DeleteComment from "./DeleteComment";

function ArticleCommentsCard({ comments, setComments }) {
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
              <DeleteComment setComments={setComments} comment={comment} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArticleCommentsCard;
