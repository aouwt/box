const { spawn } = require("child_process");
const fetch = require("node-fetch");
const fs = require("fs");

function download() {
fs.readFile('.boxcache', function(err, data) {
    const getdata = data;
    const package = getdata.toString()
    const newjson = undefined;
        //actual download phase, first set a link to fetch info.json from
        const infojsonlink = "https://raw.githubusercontent.com/Freddson/box-packages/main/" + package + "/info.json"
        console.log(infojsonlink)
        fetch(infojsonlink).then(res => res.json()).then(json => newjson => fs.writeFile('.boxjsoncache', newjson, function (err) {
            if (err) throw err;
          }));
    });
}

function installpkg() {

}

module.exports = { download, installpkg };