const express = require("express");
const router = express.Router();
const commentController= require("../controller/commentController");

router.route("/").get(commentController.getComments).post(commentController.createComment);
router.route("/:id").delete(commentController.deleteComment).put(commentController.updateComment);

module.exports = router;