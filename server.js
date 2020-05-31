const express = require('express');
const expressServer = express();
//question : what does this line do ?

const PORT = 5000;

expressServer.use(require('./src/routes/routes.js'));

var forDes_Data = require('./src/dataFiles/testData.json');
// console.log(forDes_Data);

expressServer.get('/api/forms-test', (req, res) => {
    res.send(forDes_Data);
    console.log('server recieved a test-data request');
});

expressServer.put('/gis/addpolygon', function(req, res) {
    // var jSonSTring = JSON.stringify(req.body);
    // var respObj = JSON.parse(jSonSTring);

    // var coords = respObj.geometry.coordinates;
    // var name = respObj.properties.name;

    // add_name_polygons_toData(name, coords, data_array);
    // res.send(`your polygon named : ${name} has been added !`);
});


expressServer.listen(PORT, () =>
    console.log(`express server is now listening on port ${PORT}`)
);