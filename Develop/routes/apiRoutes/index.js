const router = require('express').Router();
const apiNotes = require('/apiNotes');

router.use(apiNotes);

module.exports = router;