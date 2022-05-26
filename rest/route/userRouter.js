const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.route("/").get(userController.getUsers).post(userController.createUser);
router.route("/:id/suspend").post(userController.suspendUser);
router.route("/:id/unsuspend").post(userController.unsuspendUser);

module.exports = router;