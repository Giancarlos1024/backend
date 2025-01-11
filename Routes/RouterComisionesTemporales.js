const express = require('express');
const router = express.Router();

const{
    getComisionTemporalDatos,
    saveComisionTemporal,
} = require('../Controllers/Controllers_ComisionesTemporales')

//Rutas
router.get('/comisiontemp', getComisionTemporalDatos);
router.post('/guardarcomision', saveComisionTemporal);

module.exports = router;
