const express = require('express');
const { getNotaMedia, getAsignaturasApuntadas, getAsignaturasImpartidas } = require('../controllers/asignaturas.controller');
const router = express.Router();

router.get('/media', getNotaMedia);
router.get('/media/:id', getNotaMedia);
router.get('/apuntadas', getAsignaturasApuntadas);
router.get('/apuntadas/:id', getAsignaturasApuntadas);
router.get('/impartidas', getAsignaturasImpartidas);
router.get('/impartidas/:id', getAsignaturasImpartidas);

module.exports = router;
