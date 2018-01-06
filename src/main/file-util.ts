import * as fs from "fs";
import * as path from "path";

export function mkdirSync (dir : string) {
    let arr = dir.split("/");
    let curDir = "";

    for (let i=0; i<arr.length; ++i) {
        curDir += `/${arr[i]}`;
        if (!fs.existsSync(curDir)) {
            console.log(`Making directory ${curDir}`);
            fs.mkdirSync(curDir);
        }
    }
}

export function writeSync (filePath : string, str : string) {
    //const fileName = path.basename(filePath);
    const dirPath  = path.dirname(filePath);
    mkdirSync(dirPath);
    fs.writeFileSync(filePath, str);
}
