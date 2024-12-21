import axios from "axios";

const api = axios.create({
  baseURL: "https://kates-nc-news.onrender.com/api",
});

function getArticles(topic, sort_by, order, page, limit) {
  return api
    .get("/articles", { params: { topic, sort_by, order, p: page, limit } })
    .then(({ data }) => {
      return data;
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

function updateVotesByArticleId(article_id, inc_votes) {
  return api
    .patch(`/articles/${article_id}`, { inc_votes })
    .then(({ data }) => {
      return data.article;
    });
}

function addCommentByArticleId(articleId, newComment) {
  return api
    .post(`/articles/${articleId}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
}

function deleteComment(comment_id) {
  return api.delete(`/comments/${comment_id}`).then(({ data }) => {
    return data.comment;
  });
}

function getTopics() {
  return api.get("/topics").then(({ data }) => {
    return data.topics;
  });
}

// function getArticlesPagination(page, limit) {
//   return api
//     .get("/articles", { params: { p: page, limit } })
//     .then(({ data }) => {
//       return data;
//     });
// }

export {
  getArticles,
  getArticleById,
  fetchCommentsForArticle,
  addCommentByArticleId,
  deleteComment,
  getTopics,
  updateVotesByArticleId,
};
