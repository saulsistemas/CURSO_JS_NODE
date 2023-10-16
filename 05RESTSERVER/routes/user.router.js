const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/rol');
const { usuarioGet, usuarioPut, usuarioPost, usuarioDelete, usuarioPatch } = require('../controllers/userController');
const { validarCampos } = require('../middleware/validar-campos');
//const router = require('express').Router();
const router = Router();

router.get('/',usuarioGet)
router.put('/:id',usuarioPut)
router.post('/',[
    check('nombre','el nombre es obligatorio').not().isEmpty(),
    check('password','el password debe ser más de 6 letras').isLength({min:6}),
    check('correo','el correo no es valido').isEmail(),
    //check('rol','no es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(async(rol='') =>{
        const existeRol = await Role.findOne({rol});
        if (!existeRol) {
            throw new Error('El rol '+rol+' no esta registrado en la BD')
        }
    }),
    validarCampos
],usuarioPost)
router.delete('/',usuarioDelete)
router.patch('/',usuarioPatch)

module.exports = router;