const { Router } = require('express');
const { check } = require('express-validator');
const { usuarioGet, usuarioPut, usuarioPost, usuarioDelete, usuarioPatch } = require('../controllers/userController');
//const router = require('express').Router();
const router = Router();

router.get('/',usuarioGet)
router.put('/:id',usuarioPut)
router.post('/',[
    check('correo','el correo no es valido').isEmail(),
],usuarioPost)
router.delete('/',usuarioDelete)
router.patch('/',usuarioPatch)

module.exports = router;