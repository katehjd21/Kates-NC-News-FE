import axios from "axios";

const api = axios.create({
  baseURL: "https://kates-nc-news.onrender.com/api",
});

function getArticles() {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
}

function getArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}

function fetchCommentsForArticle(article_id) {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

function incrementVotesByArticeId(article_id) {
  return api.patch(`/articles/${article_id}`, { inc_votes: 1 }).then(() => {
    console.log("Vote incremented successfully!");
  });
}

function decrementVotesByArticeId(article_id) {
  return api.patch(`/articles/${article_id}`, { inc_votes: -1 }).then(() => {
    console.log("Vote decremented successfully!");
  });
}

export {
  getArticles,
  getArticleById,
  fetchCommentsForArticle,
  incrementVotesByArticeId,
  decrementVotesByArticeId,
};
