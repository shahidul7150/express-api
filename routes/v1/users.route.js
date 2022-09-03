const express = require("express");
const userController = require("../../controllers/users.controller");
const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/viewCount");
const router = express.Router();

// router.get("/:id", (req, res) => {
//     res.send("user found with id");
// })

// router.post("/", (req, res) => {
//     res.send("user added")
// })

router
    .route("/")
    .get(userController.getAllUsers)
    .post(userController.saveUser)

router.route("/:id")
    .get(userController.getsingleUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)
module.exports = router;