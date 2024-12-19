import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticlesSortBy from "./ArticlesSortBy";
import ArticlesList from "./ArticlesList";
import { useSearchParams } from "react-router-dom";

function FetchArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by") || "created_at";
  const orderQuery = searchParams.get("order") || "desc";

  const setSortOrder = (direction) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", direction);
    setSearchParams(newParams);
  };

  const setSortBy = (type) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", type);
    setSearchParams(newParams);
  };

  useEffect(() => {
    setIsLoading("Articles are loading...");
    getArticles(topicQuery, sortByQuery, orderQuery)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(null);
      })
      .catch((err) => {
        console.log("Error fetching articles:", err);
        setHasError("Failed to load articles. Please try again later!");
        setIsLoading(null);
      });
  }, [topicQuery, sortByQuery, orderQuery]);

  return (
    <>
      <h2 id="articles-title">
        {topicQuery ? `Articles on ${topicQuery}` : "All Articles"}
      </h2>
      <ArticlesSortBy setSortBy={setSortBy} currentSortBy={sortByQuery} />
      <button className="order-btn" onClick={() => setSortOrder("asc")}>
        Ascending
      </button>
      <button className="order-btn" onClick={() => setSortOrder("desc")}>
        Descending
      </button>
      <ArticlesList
        articles={articles}
        isLoading={isLoading}
        hasError={hasError}
      />
    </>
  );
}

export default FetchArticles;
