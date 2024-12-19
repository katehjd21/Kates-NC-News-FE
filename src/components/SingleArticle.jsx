import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router-dom";
import SingleArticleCard from "./SingleArticleCard";
import ArticleComments from "./ArticleComments";
import Error from "./Error";
import Loading from "./Loading";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading("Article is loading...");
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(null);
      })
      .catch((err) => {
        setHasError("Failed to load article. Please try again later!");
        setIsLoading(null);
      });
  }, [article_id]);

  return (
    <section id="single-article">
      {isLoading ? (
        <Loading message={isLoading} />
      ) : hasError ? (
        <Error message={hasError} />
      ) : (
        <>
          <SingleArticleCard article={article} />
          <ArticleComments />
        </>
      )}
    </section>
  );
}

export default SingleArticle;
