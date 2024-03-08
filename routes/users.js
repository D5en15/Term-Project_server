const { Router } = require("express");
const router = Router();

const { users, saveuser } = require('../controllers/users');


router.post('/login',[
    check('title_name', 'Title is required').isEmail(),
    check('first_name', 'Firstname is required').not().isEmpty(),
    check('last_name', 'Lastname is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('picture_thumbnail', 'Picture is required').not().isEmpty(),
    validateInput
],login );


router.get("/allusers", users);

//router.get("/saveuser", saveuser);

router.post('/saveuser',saveuser);

module.exports = router;