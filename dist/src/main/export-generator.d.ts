export interface GenerateExportSettings {
    sourceGlobs: string[];
    outputDirectory: string;
    outputFileName: string;
}
export declare function generateExport(settings: GenerateExportSettings): void;
