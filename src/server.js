import app from './app';

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./../swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3333);
