import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticlesSortBy from "./ArticlesSortBy";
import ArticlesOrder from "./ArticlesOrder";
import ArticlesList from "./ArticlesList";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

function FetchArticles() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(9);
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
    getArticles(topicQuery, sortByQuery, orderQuery, page, limit)
      .then(({ articles, total_count }) => {
        setArticlesList(articles);
        setTotalCount(total_count);
        setIsLoading(null);
      })
      .catch(() => {
        setHasError("Failed to load articles. Please try again later!");
        setIsLoading(null);
      });
  }, [topicQuery, sortByQuery, orderQuery, page, limit]);

  return (
    <section>
      <h2 id="articles-title">
        {topicQuery ? `Articles on ${topicQuery}` : "All Articles"}
      </h2>
      <ArticlesSortBy setSortBy={setSortBy} currentSortBy={sortByQuery} />
      <ArticlesOrder setSortOrder={setSortOrder} />
      <ArticlesList
        articlesList={articlesList}
        isLoading={isLoading}
        hasError={hasError}
      />
      <Pagination
        totalCount={totalCount}
        setPage={setPage}
        page={page}
        limit={limit}
      />
    </section>
  );
}

export default FetchArticles;
