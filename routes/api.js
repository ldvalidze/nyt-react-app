const express = require('express');
const router  = express.Router();

const headline_controllers = require('../controllers/headline');
const note_controller = require('../controllers/note');

//headline routes
// router.delete("/api/clear", headline_controllers.clearHeadlines);
// router.get("/api/headlines", headline_controllers.displayAllHeadlines);
router.get("/api/headlines/saved", headline_controllers.displaySavedHeadlines);
router.get("/api/headlines/:id", headline_controllers.displayOneHeadline);
router.post("/api/headlines", headline_controllers.saveHeadline);
router.delete("/api/headlines/:id", headline_controllers.deleteHeadline);


//note routes
router.get("/api/notes/:id", note_controller.displayNotes);
router.post("/api/notes", note_controller.addNote);
router.delete("/api/notes/:id", note_controller.deleteNote);


module.exports = router;