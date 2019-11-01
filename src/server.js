const express = require('express');
const routes = require('./routes');

require('./database/index');

const app = express();

app.use(express.json());
app.use(routes);

const listenPort = 3332;
app.listen(listenPort, () => console.log(`Server started on port ${listenPort}`))