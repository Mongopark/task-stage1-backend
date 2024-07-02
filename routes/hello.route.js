const express = require("express");
const router = express.Router();
const { greet } = require("../controllers/hello");

router.get("/:name", greet);

module.exports = router;
