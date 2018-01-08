import * as fileUtil from "./file-util";
import {buildExport} from "./export-generator";
import {buildNamespacedExport} from "./namespaced-export-generator";

export interface GenerateMixedExportSettings {
    exportSourceGlobs : string[],
    namespacedExportSourceGlobs : string[],
    outputDirectory : string,
    outputFileName : string,
}

export function buildMixedExport (settings : GenerateMixedExportSettings) {
    const w : string[] = [];
    w.push(...buildExport({
        sourceGlobs     : settings.exportSourceGlobs,
        outputDirectory : settings.outputDirectory,
        outputFileName  : settings.outputFileName,
    }));
    w.push(...buildNamespacedExport({
        sourceGlobs     : settings.namespacedExportSourceGlobs,
        outputDirectory : settings.outputDirectory,
        outputFileName  : settings.outputFileName,
    }));
    return w;
}

export function generateMixedExport (settings : GenerateMixedExportSettings) {
    const w = buildMixedExport(settings);
    fileUtil.writeSync(`${settings.outputDirectory}/${settings.outputFileName}`, w.join("\n"));
}
