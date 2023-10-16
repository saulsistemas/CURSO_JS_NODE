const { Router } = require('express');
const { usuarioGet, usuarioPut, usuarioPost, usuarioDelete, usuarioPatch } = require('../controllers/usuarioController');
//const router = require('express').Router();
const router = Router();

router.get('/',usuarioGet)
router.put('/:id',usuarioPut)
router.post('/',usuarioPost)
router.delete('/',usuarioDelete)
router.patch('/',usuarioPatch)

module.exports = router;