import { useEffect } from "react";
import { getArticles } from "../api";
import { useState } from "react";
import ArticlesList from "./Articles.List";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getArticles()
      .then((articlesData) => {
        setArticles(articlesData);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setArticles]);

  return (
    <>
      <h2 id="articles-title">Articles</h2>
      <ArticlesList articles={articles} isLoading={isLoading} error={error} />
    </>
  );
}

export default Articles;
