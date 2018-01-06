import * as path from "path";
import * as fileUtil from "./file-util";
import * as glob from "glob";
import * as _ from "underscore";

export interface GenerateNamespacedExportSettings {
    sourceGlobs : string[],
    outputDirectory : string,
    outputFileName : string,
}

export function generateNamespacedExport (settings : GenerateNamespacedExportSettings) {
    let files : string[] = [];
    for (let sourceGlob of settings.sourceGlobs) {
        files.push(...glob.sync(sourceGlob));
    }
    files = _.unique(files);

    const basenames : string[] = [];
    const w : string[] = [];
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
        w.push(`    ${basename},`)
    }
    w.push(`}`);

    fileUtil.writeSync(`${settings.outputDirectory}/${settings.outputFileName}`, w.join("\n"));
}
