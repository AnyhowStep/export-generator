import * as path from "path";
import * as fileUtil from "./file-util";
import * as glob from "glob";
import * as _ from "underscore";

export interface GenerateExportSettings {
    sourceGlobs : string[],
    outputDirectory : string,
    outputFileName : string,
}

export function generateExport (settings : GenerateExportSettings) {
    let files : string[] = [];
    for (let sourceGlob of settings.sourceGlobs) {
        files.push(...glob.sync(sourceGlob));
    }
    files = _.unique(files);

    const w : string[] = [];
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
