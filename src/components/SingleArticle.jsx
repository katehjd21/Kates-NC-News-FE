import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import SingleArticleCard from "./SingleArticleCard";
import ArticleComments from "./ArticleComments";
import Error from "./Error";
import Loading from "./Loading";
import "../styling/SingleArticle.css";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(null);
  const [commentCount, setCommentCount] = useState(0);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading("Article is loading...");
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(null);
        setCommentCount(article.comment_count);
      })
      .catch((err) => {
        setHasError("Failed to load article. Please try again later!");
        setIsLoading(null);
      });
  }, [article_id]);

  function incrementCommentCount() {
    setCommentCount((currCount) => currCount + 1);
  }

  function decrementCommentCount() {
    setCommentCount((currCount) => currCount - 1);
  }

  return (
    <section id="single-article">
      {isLoading ? (
        <Loading message={isLoading} />
      ) : hasError ? (
        <Error message={hasError} />
      ) : (
        <>
          <SingleArticleCard
            article={{ ...article, comment_count: commentCount }}
          />
          <ArticleComments
            incrementCommentCount={incrementCommentCount}
            decrementCommentCount={decrementCommentCount}
          />
        </>
      )}
    </section>
  );
}

export default SingleArticle;
