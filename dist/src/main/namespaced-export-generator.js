"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fileUtil = require("./file-util");
const glob = require("glob");
const _ = require("underscore");
function buildNamespacedExport(settings) {
    let files = [];
    for (let sourceGlob of settings.sourceGlobs) {
        files.push(...glob.sync(sourceGlob));
    }
    files = _.unique(files);
    const basenames = [];
    const w = [];
    for (let f of files) {
        let relative = path.relative(settings.outputDirectory, f);
        if (relative == settings.outputFileName) {
            continue;
        }
        relative = relative.replace(/(\.[^\.]+)$/, "");
        let basename = path.basename(relative).replace(/[^a-zA-Z0-9]/g, "_");
        if (/^\d/.test(basename)) {
            basename = `_${basename}`;
        }
        basenames.push(basename);
        w.push(`import * as ${basename} from "./${relative}";`);
    }
    w.push(`export {`);
    for (let basename of basenames) {
        w.push(`    ${basename},`);
    }
    w.push(`}`);
    return w;
}
exports.buildNamespacedExport = buildNamespacedExport;
function generateNamespacedExport(settings) {
    const w = buildNamespacedExport(settings);
    fileUtil.writeSync(`${settings.outputDirectory}/${settings.outputFileName}`, w.join("\n"));
}
exports.generateNamespacedExport = generateNamespacedExport;
//# sourceMappingURL=namespaced-export-generator.js.map