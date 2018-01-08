"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileUtil = require("./file-util");
const export_generator_1 = require("./export-generator");
const namespaced_export_generator_1 = require("./namespaced-export-generator");
function buildMixedExport(settings) {
    const w = [];
    w.push(...export_generator_1.buildExport({
        sourceGlobs: settings.exportSourceGlobs,
        outputDirectory: settings.outputDirectory,
        outputFileName: settings.outputFileName,
    }));
    w.push(...namespaced_export_generator_1.buildNamespacedExport({
        sourceGlobs: settings.namespacedExportSourceGlobs,
        outputDirectory: settings.outputDirectory,
        outputFileName: settings.outputFileName,
    }));
    return w;
}
exports.buildMixedExport = buildMixedExport;
function generateMixedExport(settings) {
    const w = buildMixedExport(settings);
    fileUtil.writeSync(`${settings.outputDirectory}/${settings.outputFileName}`, w.join("\n"));
}
exports.generateMixedExport = generateMixedExport;
//# sourceMappingURL=mixed-export-generator.js.map