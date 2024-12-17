Articles;
import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticlesList from "./ArticlesList";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h2 id="articles-title">Articles</h2>
      <ArticlesList articles={articles} isLoading={isLoading} error={error} />
    </>
  );
}

export default Articles;
