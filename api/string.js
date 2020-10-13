const express = require('express');
const router = express.Router();



// @route    POST api/profile
// @desc     Test route
// @access   Public 
router.get('/', (req, res) => {
    res.send({
        "message" : "Successful request from /api/string"
    })
})

// @route    POST api/profile
// @desc     Processes JSON test data
// @access   Public 
router.post('/', (req, res) => {
    const str = req.body.string;

    if(str) {
        res.send({
            "message" : "Here is your string: " + str
        });
    }
    else{
        res.send({
            "message" : "error, please send a string in JSON format"
        })
    }
});


module.exports = router;