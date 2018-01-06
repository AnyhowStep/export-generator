import {generateExport} from "../main/export-generator";
import {generateNamespacedExport} from "../main/namespaced-export-generator";

generateExport({
    sourceGlobs : [`${__dirname}/../main/*.ts`],
    outputDirectory : `${__dirname}/../main`,
    outputFileName : `index.ts`,
});
generateNamespacedExport({
    sourceGlobs : [`${__dirname}/../main/*.ts`],
    outputDirectory : `${__dirname}/../main`,
    outputFileName : `test.ts`,
});
