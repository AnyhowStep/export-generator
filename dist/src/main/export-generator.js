"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fileUtil = require("./file-util");
const glob = require("glob");
const _ = require("underscore");
function generateExport(settings) {
    let files = [];
    for (let sourceGlob of settings.sourceGlobs) {
        files.push(...glob.sync(sourceGlob));
    }
    files = _.unique(files);
    const w = [];
    for (let f of files) {
        let relative = path.relative(settings.outputDirectory, f);
        if (relative == settings.outputFileName) {
            continue;
        }
        relative = relative.replace(/(\.[^\.]+)$/, "");
        w.push(`export * from "./${relative}";`);
    }
    fileUtil.writeSync(`${settings.outputDirectory}/${settings.outputFileName}`, w.join("\n"));
}
exports.generateExport = generateExport;
//# sourceMappingURL=export-generator.js.map