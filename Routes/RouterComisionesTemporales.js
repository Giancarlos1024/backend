const express = require('express');
const router = express.Router();

const{
    getComisionTemporalDatos,
    saveComisionTemporal,
    updateComisionTemporal,
    deleteComisionTemporal,
} = require('../Controllers/Controllers_ComisionesTemporales')

//Rutas
router.get('/comisiontemp', getComisionTemporalDatos);
router.post('/guardarcomision', saveComisionTemporal);
router.put('/actualizarcomision', updateComisionTemporal);
router.delete('/borrarcomision', deleteComisionTemporal);

module.exports = router;
