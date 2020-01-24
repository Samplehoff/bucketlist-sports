const router = require('express').Router();
const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login')
    }
    else{
        //if logged in
        next();
    }
}

router.get('/', authCheck, function (req,res) {
    // res.send('You are logged in - ' + req.user.userName);
    console.log("recieved")
    res.render('profile')
    // console.log("recieved")
});

// , {user: req.user}

module.exports = router;