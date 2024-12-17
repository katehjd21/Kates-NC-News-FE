import { useParams } from "react-router-dom";
import { fetchCommentsForArticle } from "../api";
import { useEffect, useState } from "react";
import ArticleCommentsCard from "./ArticleCommentsCard";

function ArticleComments() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsForArticle(article_id)
      .then((commentsData) => {
        setComments(commentsData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setIsLoading(false);
      });
  }, [article_id]);

  return (
    <>
      {isLoading ? (
        <p>Comments are loading...</p>
      ) : error ? (
        <p>Oops, something went wrong! Please try again...</p>
      ) : (
        <>
          <ArticleCommentsCard comments={comments} />
        </>
      )}
    </>
  );
}

export default ArticleComments;
