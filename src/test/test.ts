import * as exportGenerator from "../main/index";

exportGenerator.generateExport({
    sourceGlobs : [
        `${__dirname}/*.ts`,
        `${__dirname}/folder-foo-bar/**/*.ts`
    ],
    outputDirectory : `${__dirname}/generated`,
    outputFileName : `index.ts`,
});
exportGenerator.generateNamespacedExport({
    sourceGlobs : [
        `${__dirname}/*.ts`,
        `${__dirname}/folder-foo-bar/**/*.ts`
    ],
    outputDirectory : `${__dirname}/generated`,
    outputFileName : `namespaced.ts`,
});
