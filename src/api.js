import axios from "axios";

const api = axios.create({
  baseURL: "https://kates-nc-news.onrender.com/api",
});

function getArticles() {
  return api
    .get("/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getArticleById(article_id) {
  return api
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => {
      console.log(err);
    });
}

function fetchCommentsForArticle(article_id) {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getArticles, getArticleById, fetchCommentsForArticle };
