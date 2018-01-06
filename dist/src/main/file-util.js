"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
function mkdirSync(dir) {
    let arr = dir.split("/");
    let curDir = "";
    for (let i = 0; i < arr.length; ++i) {
        curDir += `/${arr[i]}`;
        if (!fs.existsSync(curDir)) {
            console.log(`Making directory ${curDir}`);
            fs.mkdirSync(curDir);
        }
    }
}
exports.mkdirSync = mkdirSync;
function writeSync(filePath, str) {
    //const fileName = path.basename(filePath);
    const dirPath = path.dirname(filePath);
    mkdirSync(dirPath);
    fs.writeFileSync(filePath, str);
}
exports.writeSync = writeSync;
//# sourceMappingURL=file-util.js.map