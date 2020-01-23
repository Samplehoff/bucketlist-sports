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
    res.render('profile.mustache')
});

module.exports = router;