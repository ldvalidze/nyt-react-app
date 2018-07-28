const express = require('express');
const router  = express.Router();

const headline_controllers = require('../controllers/headline');

router.get("/api/headlines/saved", headline_controllers.displaySavedHeadlines);
router.post("/api/headlines", headline_controllers.saveHeadline);
router.delete("/api/headlines/:id", headline_controllers.deleteHeadline);

module.exports = router;