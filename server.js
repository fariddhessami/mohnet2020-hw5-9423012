const express = require('express');
const expressServer = express();
//question : what does this line do ?

const PORT = 5000;

expressServer.use(express.json());
//for reading json in a request's input body

expressServer.use(require('./src/routes/routes.js'));

var forDes_Data = require('./src/dataFiles/testData.json');
// console.log(forDes_Data);

expressServer.get('/api/forms-test', (req, res) => {
    res.send(forDes_Data);
    console.log('server recieved a test-data request');
});

expressServer.get('/api/forms/', (req, res) => {
    res.send(forDes_Data);
    console.log('server recieved a data request');
});

expressServer.get('/api/forms/:formid', (req, res) => {
    let formid = req.params.formid;

    console.log('server recieved a single form request id : ', formid);

    // res.send((forDes_Data));
});

expressServer.put('/api/submitform', function(req, res) {

    // console.log(`a form is submited to the server : ${JSON.stringify(req.body)}`);
    // console.log(`a form is submited to the server : ${req}`);
    console.log(`a form is submited to the server : ${req.body}`);
    console.log(req.body);

    // var jSonSTring = JSON.stringify(req.body);
    // console.log(`a form is submited to the server : ${jSonSTring}`);
    // res.send('alo');
    // console.log(jSonSTring);
    // console.log('req', req);
    // console.log('req.body', req.body);

});

expressServer.post('/api/submitform', function(req, res) {

    // console.log(`a form is submited to the server : ${JSON.stringify(req.body)}`);
    // console.log(`a form is submited to the server : ${req}`);
    // console.log(`a form is submited to the server : ${req.body}`);

    // var jSonSTring = JSON.stringify(req.body);
    // console.log(`a form is submited to the server : ${jSonSTring}`);
    // res.send('alo');
    // console.log(jSonSTring);
    // console.log('req', req);
    // console.log('req.body', req.body);
});



expressServer.listen(PORT, () =>
    console.log(`express server is now listening on port ${PORT}`)
);