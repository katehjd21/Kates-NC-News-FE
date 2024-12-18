import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

function ArticlesList({ articles, isLoading, hasError }) {
  return (
    <section>
      {isLoading ? (
        <p>Articles are loading...</p>
      ) : hasError ? (
        <>
          <p>{hasError}</p>
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
