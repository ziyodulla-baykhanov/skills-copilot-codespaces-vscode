// Create web server
// GET /comments
// POST /comments
// DELETE /comments/:id

const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

router.get("/", (req, res) => {
  Comment.find({}).then(comments => {
    res.json(comments);
  });
});

router.post("/", (req, res) => {
  Comment.create(req.body).then(comment => {
    res.json(comment);
  });
});

router.delete("/:id", (req, res) => {
  Comment.findByIdAndRemove(req.params.id).then(comment => {
    res.json(comment);
  });
});

module.exports = router;