import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticlesList from "./ArticlesList";

function FetchArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    setIsLoading("Articles are loading...");
    getArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(null);
      })
      .catch((err) => {
        console.log("Error fetching articles:", err);
        setHasError("Failed to load articles. Please try again later!");
        setIsLoading(null);
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
