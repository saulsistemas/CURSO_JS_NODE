const { Router } = require('express');
const { check } = require('express-validator');

const { usuarioGet, usuarioPut, usuarioPost, usuarioDelete, usuarioPatch } = require('../controllers/userController');
const { validarCampos } = require('../middleware/validar-campos');
const { esRolValido, emailExiste, exiteUsuarioporID } = require('../helpers/db-validators');
//const router = require('express').Router();
const router = Router();

router.get('/',usuarioGet)
router.put('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(exiteUsuarioporID),
    check('rol').custom(esRolValido),
    validarCampos,
]
,usuarioPut)
router.post('/',[
    check('nombre','el nombre es obligatorio').not().isEmpty(),
    check('password','el password debe ser más de 6 letras').isLength({min:6}),
    //check('correo','el correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    //check('rol','no es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),

    //check('rol').custom((rol)=>esRolValido(rol)),//si va retornar el mismo rol, podemos resumirlo como abajao
    check('rol').custom(esRolValido),
    validarCampos
],usuarioPost)
router.delete('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(exiteUsuarioporID),
    validarCampos
],usuarioDelete)
router.patch('/',usuarioPatch)

module.exports = router;