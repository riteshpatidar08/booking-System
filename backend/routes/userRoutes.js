const express= require('express');
const router = express.Router() ;
const userController = require('../controller/userController')
const protect = require('../middleware/protect')
const admin = require('../middleware/admin') 

router.post('/signup', userController.signup)
router.post('/login' , userController.login)
router.get('/allusers', protect, admin ,userController.getUsers)


module.exports = router