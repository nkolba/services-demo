const openfinLauncher = require('hadouken-js-adapter');
const express = require('express');
const fetch = require('node-fetch');
const http = require('http');
const path = require('path');
const os = require('os');

const {lookupServiceUrl} = require('./utils');

var port = process.env.PORT || 3011;

var app = express();

app.use(express.static('./build'));

http.createServer(app).listen(port, function(){
    console.log('Express server listening on port ' + port);
    const confPath  = path.resolve('build', 'apps.json');
    openfinLauncher.launch({ manifestUrl: confPath }).catch(err => console.log(err));

    // on OS X we need to launch the provider manually (no RVM)
    if (os.platform() === 'darwin') {
        const conf = require(confPath);
        if (conf && conf.services) {
            for (let i=0; i<conf.services.length; i++) {
                const service = conf.services[i];
                launchService(service);
            }
        }
    }
});

const launchService = async (service) => {
    if (service.manifestUrl) {
        launchServiceUrl(service.manifestUrl);
        console.log(`Starting service: ${service.name} from manifestUrl: ${service.manifestUrl}`);
    } else {
        const sUrl = await lookupServiceUrl(service.name);
        if (sUrl.length > 0) {
            launchServiceUrl(sUrl);
            console.log(`Starting service: ${service.name} from app directory url: ${sUrl}`);
        } else {
            console.log(`unable to launch service: ${service.name}, could not determine url.`);
        }
    }
};

const launchServiceUrl = (url) => {
    openfinLauncher.launch({ manifestUrl: url }).catch(err => console.log(err));
};
