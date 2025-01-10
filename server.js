const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
const corsOptions = {
	origin: 'https://comisiones-freyes.com', // Cambia a tu URL de Render/  
	optionsSuccessStatus: 200,
};

//const corsOptions = {
//  origin: 'https://frontend-098z.onrender.com', // Cambia a tu URL de Render
//  optionsSuccessStatus: 200,
//};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));

// Rutas
const loginRoutes = require('./Routes/RouterLogin');
const FacturaRoutes = require('./Routes/RouterReporteFactura');
const FacturaBreveRoutes = require('./Routes/RouterFacturaBreve');
const ResumenFacturaRoutes = require('./Routes/RouterReporteFactura');
const PrimasSD = require('./Routes/RouterPrimasSD');
const ComisionesSD = require('./Routes/RouterComisionesSD');


const Graficos = require('./Routes/RouterGraficoPrimaSoles');
const Graficosdol = require('./Routes/RouterGraficoPrimaDolares');
const GraficoOficinas = require('./Routes/RouterGraficoOficinasPrimas');
const GraficoOficinasDolares = require('./Routes/RouterGraficoOficinasPrimasDolares');
const GraficoRamoSBS = require('./Routes/RouterGraficoRamoSBSPrimaComisiones');
const GraficoRamoSBSDolares = require('./Routes/RouterGraficoRamoSBSPrimaComisionesDolares');


app.use('/api', loginRoutes);
app.use('/api/api/facturas', FacturaRoutes);
app.use('/api/facturabreve', FacturaBreveRoutes);
app.use('/api/resumen', ResumenFacturaRoutes);
app.use('/api/prueba', PrimasSD);
app.use('/api/prueba2', ComisionesSD);

app.use('/api/graficos', Graficos);
app.use('/api/graficosdol', Graficosdol);
app.use('/api/graficosoficinas', GraficoOficinas);
app.use('/api/graficosoficinasdolares', GraficoOficinasDolares);
app.use('/api/graficosramosbs', GraficoRamoSBS);
app.use('/api/graficosramosbsdolares', GraficoRamoSBSDolares);


// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
