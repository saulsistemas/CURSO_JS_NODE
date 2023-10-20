const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/authController');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router();

router.post('/login',[
    check('correo','el correo es obligatorio').isEmail(),
    check('password','el correo es obligatorio').not().isEmpty(),
    validarCampos
]
,login)

module.exports = router;