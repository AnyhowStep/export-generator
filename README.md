# `export-generator`

Generate some simple exports easily.

# Installation

`npm install --save export-generator`

# Usage

```
import * as exportGenerator from "export-generator";

exportGenerator.generateExport({
    sourceGlobs : [
        `${__dirname}/*.ts`,
        `${__dirname}/folder-foo-bar/**/*.ts`
    ],
    outputDirectory : `${__dirname}/generated`,
    outputFileName : `index.ts`,
});
```

# License

Do what you want with this as long as you do no evil.
