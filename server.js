const express = require('express');
const expressServer = express();
//question : what does this line do ?

const PORT = 5000;

expressServer.use(require('./src/routes/routes.js'));

var forDes_Data = require('./src/dataFiles/testData.json');
// console.log(forDes_Data);

router.get('/api/forms-test', (req, res) => {
    res.send(forDes_Data);
    console.log('server recieved a test-data request');
});

expressServer.listen(PORT, () =>
    console.log(`express server is now listening on port ${PORT}`)
);