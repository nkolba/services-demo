const openfinLauncher = require('hadouken-js-adapter');
const express = require('express');
const http = require('http');
const path = require('path');
const os = require('os');

/* process.env.PORT is used in case you want to push to Heroku, for example, here the port will be dynamically allocated */
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
                console.log(`Starting service: ${service.name} for Mac OS`);
                openfinLauncher.launch({ manifestUrl: service.manifestUrl }).catch(err => console.log(err));
            }
        }
    }
});
