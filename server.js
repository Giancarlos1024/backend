const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
// const corsOptions = {
//   origin: 'https://frontend-l22d.onrender.com', // Cambia a tu URL de Render
//   optionsSuccessStatus: 200,
// };

const corsOptions = {
  origin: 'https://frontend-098z.onrender.com', // Cambia a tu URL de Render
  optionsSuccessStatus: 200,
};
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


app.use('/', loginRoutes);
app.use('/api/facturas', FacturaRoutes);
app.use('/facturabreve', FacturaBreveRoutes);
app.use('/resumen', ResumenFacturaRoutes);
app.use('/prueba', PrimasSD);
app.use('/prueba2', ComisionesSD);

app.use('/graficos', Graficos);
app.use('/graficosdol', Graficosdol);
app.use('/graficosoficinas', GraficoOficinas);
app.use('/graficosoficinasdolares', GraficoOficinasDolares);
app.use('/graficosramosbs', GraficoRamoSBS);
app.use('/graficosramosbsdolares', GraficoRamoSBSDolares);


// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
