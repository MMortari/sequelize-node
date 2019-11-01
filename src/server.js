const express = require('express');
const routes = require('./routes');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);
const swaggerOptions = require('./config/swagger');

require('./database/index');

app.use(express.json());
app.use(routes);

const listenPort = 3332;

expressSwagger(swaggerOptions(listenPort));

app.listen(listenPort, () => console.log(`Server started on port ${listenPort}`))