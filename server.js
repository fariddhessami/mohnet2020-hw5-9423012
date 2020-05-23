const express = require('express');
const expressServer = express();
//question : what does this line do ?

const PORT = 5000;

expressServer.use(require('./routes/routes.js'));

expressServer.listen(PORT, () =>
    console.log(`express server is now listening on port ${PORT}`)
);