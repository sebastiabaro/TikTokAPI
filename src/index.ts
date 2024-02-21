import express from 'express';
import https from 'https';
import fs from 'fs';

const app = express();
const port = 443;

const BASEPATH = "tiktokapi"


const options = {
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('fullchain.pem')
};

app.get(`/${BASEPATH}/redirect`, (req, res) => {
  res.send(req.query);
});

app.post(`/${BASEPATH}/webhook`, (req, res) => {
    res.send(req.query);

    console.log("params",req.params);
    console.log("query",req.query);
    console.log("body",req.body);
  });

https.createServer(options, app).listen(port, () => {
  console.log(`Server running at https://localhost:${port}`);
});