import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticlesList from "./ArticlesList";
import { useSearchParams } from "react-router-dom";

function FetchArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");

  useEffect(() => {
    setIsLoading("Articles are loading...");
    getArticles(topicQuery)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(null);
      })
      .catch((err) => {
        console.log("Error fetching articles:", err);
        setHasError("Failed to load articles. Please try again later!");
        setIsLoading(null);
      });
  }, [topicQuery]);

  return (
    <>
      <h2 id="articles-title">
        {topicQuery ? `Articles on ${topicQuery}` : "All Articles"}
      </h2>
      <ArticlesList
        articles={articles}
        isLoading={isLoading}
        hasError={hasError}
      />
    </>
  );
}

export default FetchArticles;
