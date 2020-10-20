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
        "message" : "Successful request from /api/profile"
    })
})

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


    const user = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;

    if(user && email && phone) {
        res.send({
            "message" : "user: " + user + " has email: " + email + " and phone #: " + phone
        });
    }
    else{
        res.send({
            "message" : "error, please send user, email, and phone in JSON format"
        })
    }
});


module.exports = router;