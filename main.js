
import * as oflayouts from "openfin-layouts"
window.Layouts = oflayouts;

oflayouts.onLayoutRestore(function(layoutData){
    console.log("layout restore");
    layoutData.childWindows.forEach(child =>{
        let win = new fin.desktop.Window(child.info);
    });
});

window.snapLayout = {
    "apps": [
      {
        "childWindows": [
          {
            "bottom": 250,
            "contextGroups": [],
            "height": 200,
            "info": {
              "canNavigateBack": false,
              "canNavigateForward": false,
              "preloadScripts": [],
              "title": "Snap Window",
              "url": "http://localhost:3011/snap-win.html"
            },
            "isShowing": true,
            "left": 25,
            "name": "Window1",
            "right": 325,
            "state": "normal",
            "top": 50,
            "uuid": "services-demo",
            "width": 300,
            "windowGroup": []
          },
          {
            "bottom": 250,
            "contextGroups": [],
            "height": 200,
            "info": {
              "canNavigateBack": false,
              "canNavigateForward": false,
              "preloadScripts": [],
              "title": "Snap Window",
              "url": "http://localhost:3011/snap-win.html"
            },
            "isShowing": true,
            "left": 375,
            "name": "Window2",
            "right": 675,
            "state": "normal",
            "top": 50,
            "uuid": "services-demo",
            "width": 300,
            "windowGroup": []
          },
          {
            "bottom": 250,
            "contextGroups": [],
            "height": 200,
            "info": {
              "canNavigateBack": false,
              "canNavigateForward": false,
              "preloadScripts": [],
              "title": "Snap Window",
              "url": "http://localhost:3011/snap-win.html"
            },
            "isShowing": true,
            "left": 725,
            "name": "Window3",
            "right": 1025,
            "state": "normal",
            "top": 50,
            "uuid": "services-demo",
            "width": 300,
            "windowGroup": []
          },
          {
            "bottom": 575,
            "contextGroups": [],
            "height": 275,
            "info": {
              "canNavigateBack": false,
              "canNavigateForward": false,
              "preloadScripts": [],
              "title": "Snap Window",
              "url": "http://localhost:3011/snap-win.html"
            },
            "isShowing": true,
            "left": 25,
            "name": "Window4",
            "right": 325,
            "state": "normal",
            "top": 300,
            "uuid": "services-demo",
            "width": 300,
            "windowGroup": []
          },
          {
            "bottom": 575,
            "contextGroups": [],
            "height": 275,
            "info": {
              "canNavigateBack": false,
              "canNavigateForward": false,
              "preloadScripts": [],
              "title": "Snap Window",
              "url": "http://localhost:3011/snap-win.html"
            },
            "isShowing": true,
            "left": 375,
            "name": "Window5",
            "right": 675,
            "state": "normal",
            "top": 300,
            "uuid": "services-demo",
            "width": 300,
            "windowGroup": []
          },
          {
            "bottom": 575,
            "contextGroups": [],
            "height": 275,
            "info": {
              "canNavigateBack": false,
              "canNavigateForward": false,
              "preloadScripts": [],
              "title": "Snap Window",
              "url": "http://localhost:3011/snap-win.html"
            },
            "isShowing": true,
            "left": 725,
            "name": "Window6",
            "right": 1125,
            "state": "normal",
            "top": 300,
            "uuid": "services-demo",
            "width": 400,
            "windowGroup": []
          }
        ],
        "confirmed": true,
        "initialOptions": {
          "_experimental": {
            "v2Api": true
          },
          "autoShow": true,
          "defaultCentered": true,
          "defaultHeight": 500,
          "defaultWidth": 700,
          "name": "Layouts-Manager",
          "saveWindowState": false,
          "url": "http://localhost:3011/main.html",
          "uuid": "services-demo"
        },
        "launchMode": "node.exe",
        "mainWindow": {
          "bottom": 943,
          "contextGroups": [],
          "height": 500,
          "info": {
            "canNavigateBack": false,
            "canNavigateForward": false,
            "preloadScripts": [],
            "title": "Layouts Manager",
            "url": "http://localhost:3011/main.html"
          },
          "isShowing": true,
          "left": 610,
          "name": "Layouts-Manager",
          "right": 1310,
          "state": "normal",
          "top": 443,
          "uuid": "services-demo",
          "width": 700,
          "windowGroup": []
        },
        "manifestUrl": "http://localhost:3011/app.json",
        "runtime": {
          "version": "9.61.33.32"
        },
        "uuid": "services-demo"
      }
    ],
    "monitorInfo": {
      "deviceScaleFactor": 1,
      "dpi": {
        "x": 96,
        "y": 96
      },
      "nonPrimaryMonitors": [],
      "primaryMonitor": {
        "available": {
          "dipRect": {
            "bottom": 860,
            "left": 0,
            "right": 1440,
            "top": 0
          },
          "scaledRect": {
            "bottom": 860,
            "left": 0,
            "right": 1440,
            "top": 0
          }
        },
        "availableRect": {
          "bottom": 860,
          "left": 0,
          "right": 1440,
          "top": 0
        },
        "deviceId": "\\\\?\\DISPLAY#Default_Monitor#5&140b9d70&0&UID0#{e6f07b5f-ee97-4a90-b076-33f57bf4eaa7}",
        "deviceScaleFactor": 1,
        "displayDeviceActive": true,
        "dpi": {
          "x": 96,
          "y": 96
        },
        "monitor": {
          "dipRect": {
            "bottom": 900,
            "left": 0,
            "right": 1440,
            "top": 0
          },
          "scaledRect": {
            "bottom": 900,
            "left": 0,
            "right": 1440,
            "top": 0
          }
        },
        "monitorRect": {
          "bottom": 900,
          "left": 0,
          "right": 1440,
          "top": 0
        },
        "name": "\\\\.\\DISPLAY1"
      },
      "reason": "api-query",
      "taskbar": {
        "dipRect": {
          "bottom": 900,
          "left": 0,
          "right": 1440,
          "top": 860
        },
        "edge": "bottom",
        "rect": {
          "bottom": 900,
          "left": 0,
          "right": 1440,
          "top": 860
        },
        "scaledRect": {
          "bottom": 900,
          "left": 0,
          "right": 1440,
          "top": 860
        }
      },
      "virtualScreen": {
        "bottom": 900,
        "dipRect": {
          "bottom": 900,
          "left": 0,
          "right": 1440,
          "top": 0
        },
        "left": 0,
        "right": 1440,
        "scaledRect": {
          "bottom": 900,
          "left": 0,
          "right": 1440,
          "top": 0
        },
        "top": 0
      }
    },
    "name": "snaps",
    "type": "layout"
  };

document.addEventListener("DOMContentLoaded", function (evt) {
    

 
});