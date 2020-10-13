const express = require('express');
const router = express.Router();


// @route    GET api/profile
// @desc     Test route
// @access   Public 
router.get('/', (req, res) => {
    res.json({
        route: 'api/profile',
        test: 'success'
    })
});


module.exports = router;