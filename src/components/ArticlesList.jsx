import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

function ArticlesList({ articles, isLoading, error }) {
  return (
    <div>
      {isLoading ? (
        <p>Articles are loading...</p>
      ) : error ? (
        <p>Oops, something went wrong! Please try again...</p>
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
    </div>
  );
}

export default ArticlesList;
