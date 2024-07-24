const authControllers = require('../controllers/authControllers');

const router= require('express').Router();

router.post('/register', authControllers.registerUser);
router.post('/login', authControllers.loginUser);
router.get('/user/:id', authControllers.getUser);
router.put('/user/update/:id', authControllers.updateUser);

module.exports=router;

