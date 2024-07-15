const express = require('express');
const { getAlumnos, addAlumno, updateAlumno, deleteAlumno } = require('../controllers/alumnos.controller');
const router = express.Router();

router.get('/alumnos', getAlumnos);
router.get('/alumnos/:id', getAlumnos);
router.post('/alumnos', addAlumno);
router.put('/alumnos', updateAlumno);
router.delete('/alumnos', deleteAlumno);

module.exports = router;
