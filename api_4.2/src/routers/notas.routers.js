const { Router } = require("express");
const router = Router();
const notasCtrl = require("../controller/notas.controller");

// router.get('/notas/:id', notasCtrl.getMediaAlumnoId);
 //router.get('/notas/:id', notasCtrl.getAsignaturasAlumnoId);
// router.get('/notas', notasCtrl.getAsignaturasApuntadas);
router.get('/notas/:id', notasCtrl.getAsignaturasporProfesorId);
// router.get('/notas', notasCtrl.getAsignaturasImpartidas);

module.exports = router;