const express = require('express');
const cors = require('cors');
const alumnosRouter = require('./routers/alumnos.routers');
const asignaturasRouter = require('./routers/asignaturas.routers');
const errorHandler = require('./errors/errorHandling');

const app = express();

app.set('port', 3000);
app.use(cors());
app.use(express.json());

app.use('/api', alumnosRouter);
app.use('/api', asignaturasRouter);

app.use(errorHandler);

module.exports = app;
