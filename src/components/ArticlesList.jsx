import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";

function ArticlesList({ articles, isLoading, hasError }) {
  return (
    <section>
      {isLoading ? (
        <Loading message={isLoading} />
      ) : hasError ? (
        <>
          <Error message={hasError} />
        </>
      ) : (
        <ul className="article-list">
          {articles.map((article) => {
            return (
              <li className="article-card" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <ArticleCard article={article} />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default ArticlesList;
