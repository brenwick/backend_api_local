const express = require('express');
const router = express.Router();

// @route    POST api/profile
// @desc     Test route
// @access   Public
router.get('/', (req, res) => {
  console.log('\n-----Headers-----\n');
  console.log(req.headers);
  console.log('\n------Body-------\n');
  console.log(req.body);
  console.log('\n------Status-----\n');
  console.log(res.statusCode);

  res.send({
    message: 'Successful request from /api/string',
  });
});

// @route    POST api/profile
// @desc     Processes JSON test data
// @access   Public
router.post('/', (req, res) => {
  console.log('\n-----Headers-----\n');
  console.log(req.headers);
  console.log('\n------Body-------\n');
  console.log(req.body);
  console.log('\n------Status-----\n');
  console.log(res.statusCode);

  const str = req.body.string;

  if (str) {
    res.send({
      message: 'Here is your string: ' + str,
    });
  } else {
    res.send({
      message: req.body,
    });
  }
});

module.exports = router;
