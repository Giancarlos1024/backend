const pool = require('../Config/database.js')

// Jalar comisiones temporales
const getComisionTemporalDatos = (req, res) => {
    const query = 'SELECT * FROM comision_temporal ORDER BY id DESC';
    pool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json(results);
    });
};

// Insertar nuevo registro
const saveComisionTemporal = (req, res) => {
    const {poliza, n_factura, fecha, ramo_asegurador, ramo_sbs, moneda, monto_prima, monto_comision, nombre_usuario} = req.body;
    const query = `
        INSERT INTO comision_temporal (poliza, n_factura, fecha, ramo_asegurador, ramo_sbs, moneda, monto_prima, monto_comision, nombre_usuario)
        VALUES (?,?,?,?,?,?,?,?,?)`;

    const values = [poliza, n_factura, fecha, ramo_asegurador, ramo_sbs, moneda, monto_prima, monto_comision, nombre_usuario];
    
    pool.query(query, values, (err, results)=>{
        if(err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.status(201).json({message: 'Comision temporal guardada existosamente', id:results.insertId})
    })
}

//Actualizar algun registro
const updateComisionTemporal = (req, res) => {
    const { id } = req.body;
    const { poliza, n_factura, fecha, ramo_asegurador, ramo_sbs, moneda, monto_prima, monto_comision, nombre_usuario } = req.body;

    const query = `
        UPDATE comision_temporal SET
            poliza = ?, n_factura = ?, fecha = ?, ramo_asegurador = ?, ramo_sbs = ?, moneda = ?, monto_prima = ?, monto_comision = ?, nombre_usuario = ?
        WHERE id = ?
    `;

    const values = [poliza, n_factura, fecha, ramo_asegurador, ramo_sbs, moneda, monto_prima, monto_comision, nombre_usuario, id];

    pool.query(query, values, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ message: 'Comisión temporal actualizada exitosamente' });
    });
}

//Eliminar registro
const deleteComisionTemporal = (req, res) => {
    const { id } = req.body;

    const query = 'DELETE FROM comision_temporal WHERE id = ?';

    pool.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ message: 'Comision temporal eliminada exitosamente' });
    });
};

module.exports = {
    getComisionTemporalDatos,
    saveComisionTemporal,
    updateComisionTemporal,
    deleteComisionTemporal
}

