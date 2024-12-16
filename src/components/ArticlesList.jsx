import ArticleCard from "./ArticleCard";

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
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default ArticlesList;
