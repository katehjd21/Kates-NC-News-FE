import { useParams } from "react-router-dom";
import { fetchCommentsForArticle } from "../api";
import { useEffect, useState } from "react";
import ArticleCommentsCard from "./ArticleCommentsCard";
import AddComment from "./AddComment";
import Error from "./Error";
import Loading from "./Loading";

function ArticleComments({ incrementCommentCount, decrementCommentCount }) {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    setIsLoading("Comments are loading...");
    fetchCommentsForArticle(article_id)
      .then((commentsData) => {
        setComments(commentsData);
        setIsLoading(null);
      })
      .catch((err) => {
        setHasError("Failed to load comments. Please try again later!");
        setIsLoading(null);
      });
  }, [article_id]);

  return (
    <>
      {isLoading ? (
        <Loading message={isLoading} />
      ) : hasError ? (
        <Error message={hasError} />
      ) : (
        <>
          <AddComment
            setComments={setComments}
            article_id={article_id}
            incrementCommentCount={incrementCommentCount}
          />
          <ArticleCommentsCard
            comments={comments}
            setComments={setComments}
            decrementCommentCount={decrementCommentCount}
          />
        </>
      )}
    </>
  );
}

export default ArticleComments;
