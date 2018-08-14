#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fetch = require('node-fetch');
const appConfig = require('./apps.json');

async function update() {
    const services = [ 'layouts', 'notifications', 'fdc3' ];
    const npmCommand = {name: "npm", args: ['i', '--save', 'openfin-__SERVICE__@alpha']};
    const gitCommand = {name: "git", args: ['ls-remote', 'https://github.com/HadoukenIO/__SERVICE__-service.git']};
    
    for (let i in services ) {
        const service = services[i];
    
        // fill out command args template strings
        const npmargs = Object.assign([], npmCommand.args);
        npmargs[npmargs.length-1] = npmargs[npmargs.length-1].replace('__SERVICE__', service);
        // console.log(`npm command: ${npmCommand.name} ${npmargs.join(' ')}`);
        const gitargs = Object.assign([], gitCommand.args);
        gitargs[gitargs.length-1] = gitargs[gitargs.length-1].replace('__SERVICE__', service);
        // console.log(`git command: ${gitCommand.name} ${gitargs.join(' ')}`);
        const serviceUrl = getServiceUrl(service);
    
        // run the commands and process the output
        const npmOut = spawnSync(npmCommand.name, npmargs).stdout.toString();
        const npmMsg = processNPMOutput(npmOut.split('\n'));
        const gitOut = spawnSync(gitCommand.name, gitargs).stdout.toString();
        const gitMsg = getDevelopSha(gitOut.split('\n'));
    
        let maniURL = '??';
        if (serviceUrl.length >0) {
            maniURL = await getManifestUrl(serviceUrl);
        }
    
        console.log(`${service}:`);
        console.log(`    prerelease: ${npmMsg}`);
        console.log(`    github sha: ${gitMsg}`);
        console.log(`   service url: ${serviceUrl}`);
        console.log(`       app url: ${maniURL}\n`);
    }    
}

async function getManifestUrl(serviceUrl) {
    try {
        const res = await fetch(serviceUrl);
        const json = await res.json();
        if (json && json.startup_app) {
            return json.startup_app.url;
        }    
    } catch(e) {
        console.error(e);
    }
    return '??';
}

function getDevelopSha(lines) {
    // extract sha from output
    let sha = '';
    for (let j=0; j<lines.length; j++) {
        const ref = lines[j];
        if (ref.indexOf('refs/heads/develop') > -1) {
            sha = ref.split('\t')[0];
            break;
        }
    }
    return sha;
}

function processNPMOutput(lines) {
    return lines[0].replace('+ ', '');
}

function getServiceUrl(service) {
    if (appConfig.services != null) {
        for (let i=0; i<appConfig.services.length; i++) {
            const s = appConfig.services[i];
            if (service === s.name && s.manifestUrl != null) {
                return s.manifestUrl
            }
        }
    }
    return '';
}

update();