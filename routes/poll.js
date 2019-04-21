var express = require('express');
var router = express.Router();

/* GET poll page. */
router.get('/:id', function(req, res, next) {
  res.render('poll', { title: req.params.id });
  console.log(req.params.poll);
});

module.exports = router;
