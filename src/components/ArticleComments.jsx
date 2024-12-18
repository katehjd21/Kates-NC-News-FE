import { useParams } from "react-router-dom";
import { fetchCommentsForArticle } from "../api";
import { useEffect, useState } from "react";
import ArticleCommentsCard from "./ArticleCommentsCard";
import AddComment from "./AddComment";

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
          <AddComment setComments={setComments} article_id={article_id} />
          <ArticleCommentsCard comments={comments} setComments={setComments} />
        </>
      )}
    </>
  );
}

export default ArticleComments;
