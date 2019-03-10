var express = require('express');
var router = express.Router();
const kodi = require('kodi-ws');
const axios = require('axios');
const { spawn } = require('child_process');
axios.defaults.headers.post['Content-Type'] = 'application/json';

router.get('/kodi', function(req, res, next) {
    const open = spawn('C:\\Program Files\\Kodi\\kodi.exe');
    res.send('ok');
    /*axios.post('http://localhost:8080/jsonrpc', {
        "jsonrpc": "2.0", 
        "method": "Application.GetProperties", 
        "params": {"properties": ["name","version"]}, 
        "id": 1
      })
      .then(function (response) {
            console.log(response.data);
            res.send('Kodi is running');
      })
      .catch(err => {
            console.log(err.code);
            res.send('Kodi is not running');
      });*/
});

router.get('/netflix', function(req, res, next) {
    const open = spawn('c:\\windows\\explorer.exe', ['shell:appsFolder\\4DF9E0F8.Netflix_mcm4njqhnhss8!Netflix.App']);
    res.send('ok');
});

router.get('/setaudio', function(req, res, next) {
    const open = spawn('C:\\Users\\Mark\\SetAudio.exe');
    res.send('ok');
});

/*router.get('/basementkodi/tvshows/:showName', function(req, res, next) {
    const showName = req.params.showName;
    axios.post('http://localhost:8080/jsonrpc', {
        "jsonrpc": "2.0", 
        "method": "VideoLibrary.GetTVShows", 
        "id": 1
    })
    .then(function (response) {
        let foundShow;
        if(response.data.result.tvshows){
            foundShow = response.data.result.tvshows.find(tvshow => {
                console.log(`${tvshow.label} == ${showName}?`);
                return tvshow.label == showName;
            });
        }

        console.log(`${foundShow ? `Found show ${foundShow.label}` : `Could not find show ${showName}`}`);
        res.send(response.data);
    })
    .catch(err => {
        console.log(err.code);
        res.send(`oops ${err.code}`);
    });
});*/
module.exports = router;