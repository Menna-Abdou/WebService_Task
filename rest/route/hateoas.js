const express = require("express");
const router = express.Router()

router.get("/", (req, res, next) => {
        res.json({
            "Get Articles ": "http://localhost:3000/articles/",
            "Get Article ": "http://localhost:3000/articles/{:id}",
            "Get users ": "http://localhost:3000/users/",
            "Get user ": "http://localhost:3000/users/{:id}",
            "Get Comments ": "http://localhost:3000/{:articleId}/comments/",
        })
})


module.exports = router