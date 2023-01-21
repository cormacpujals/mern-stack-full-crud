const express = require("express");
const router = express.Router();

const {
  getAllTodo,
  postCreateTodo,
  putUpdateTodo,
  deleteTodo,
} = require("../controllers/todo")

router.get("/", getAllTodo); // read

router.post("/", postCreateTodo); // add

router.put("/:id", putUpdateTodo); // update

router.delete("/:id", deleteTodo); // delete

module.exports = router;