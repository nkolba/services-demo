const numApps = 4;

fin.desktop.main(async () => {

    for (let i = 0; i < numApps; i++) {
        const conf = { 
            "name" : "openfin services demo",
            "uuid": "openfin-service-demo-" + i,
            "url" : "http://localhost:3011/main.html",
            "mainWindowOptions" : {
                defaultHeight : 600,
                defaultWidth: 420,
                defaultTop: 100*i,
                defaultLeft: 100*i,
                saveWindowState: false,
                autoShow: true
            }
        };
        const app = new fin.desktop.Application(conf, () => {app.run();}, console.error);
    }

});