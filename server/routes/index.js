const router = require('express').Router();
const UserController = require('../controllers/userController');
const googleVerify = require('../middlewares/googleVerify');
const TodoRoutes = require('./todoRoute');
const authenticate = require('../middlewares/authenticate');

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({storage: storage});

router.get('/', (req, res)=>{
    res.send('hello from server')
})

router.use('/todos', TodoRoutes);

router.post('/register', UserController.register);
router.post('/signin', UserController.signin);
router.post('/google-signin', googleVerify, UserController.googleSignin);

router.post('/profile-picture', authenticate, upload.single('avatar'), UserController.uploadPicture);


module.exports = router;