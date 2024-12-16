function ArticleCard({ article }) {
  return (
    <li className="article-card">
      <h2>{article.title}</h2>
      <p>By {article.author}</p>
      <img src={article.article_img_url} id="article-image" />
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </li>
  );
}

export default ArticleCard;
