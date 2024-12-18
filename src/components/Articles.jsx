import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticlesList from "./ArticlesList";

function FetchArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching articles:", err);
        setHasError("Failed to load articles. Please try again later...");
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h2 id="articles-title">Articles</h2>
      <ArticlesList
        articles={articles}
        isLoading={isLoading}
        hasError={hasError}
      />
    </>
  );
}

export default FetchArticles;
