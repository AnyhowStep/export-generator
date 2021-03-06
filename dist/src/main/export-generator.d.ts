export interface GenerateExportSettings {
    sourceGlobs: string[];
    outputDirectory: string;
    outputFileName: string;
}
export declare function buildExport(settings: GenerateExportSettings): string[];
export declare function generateExport(settings: GenerateExportSettings): boolean;
