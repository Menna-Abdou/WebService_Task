const articleController = require("../controller/articleController");
const express = require("express");
const router = express.Router();


router
  .route("/")
  .get(articleController.getAllArticles)
  .post(articleController.postArticle);
router
  .route("/:id")
  .get(articleController.getArticle)
  .patch(articleController.patchArticle)
  .delete(articleController.deleteArticle);
  router
  .route("/:id/comments").get(articleController.articleComments)
  module.exports = router;
