function SingleArticleCard({ article }) {
  return (
    <div id="single-article-card">
      <h2 id="article-title">{article.title}</h2>
      <p id="article-author">Author: {article.author}</p>
      <p id="article-published">Published: {article.created_at}</p>
      <p id="article-topic">Topic: {article.topic}</p>
      <p id="article-body">{article.body}</p>
      <img src={article.article_img_url} id="single-article-img" />
      <p id="article-votes">Votes: {article.votes}</p>
      <p id="article-comment-count">Comment Count: {article.comment_count}</p>
    </div>
  );
}

export default SingleArticleCard;
