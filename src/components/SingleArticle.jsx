import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router-dom";
import SingleArticleCard from "./SingleArticleCard";
import ArticleComments from "./ArticleComments";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
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
        <p>Articles are loading...</p>
      ) : error ? (
        <p>Oops, something went wrong! Please try again...</p>
      ) : (
        <>
          <SingleArticleCard article={article} />
          <ArticleComments />
        </>
      )}
    </>
  );
}

export default SingleArticle;
