function ArticleCard({ article }) {
  return (
    <>
      <h2 className="article-text">{article.title}</h2>
      <p className="article-text">By {article.author}</p>
      <img src={article.article_img_url} id="article-image" />
      <p className="article-text">Votes: {article.votes}</p>
      <p className="article-text">Comments: {article.comment_count}</p>
    </>
  );
}

export default ArticleCard;
