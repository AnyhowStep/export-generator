export interface GenerateMixedExportSettings {
    exportSourceGlobs: string[];
    namespacedExportSourceGlobs: string[];
    outputDirectory: string;
    outputFileName: string;
}
export declare function buildMixedExport(settings: GenerateMixedExportSettings): string[];
export declare function generateMixedExport(settings: GenerateMixedExportSettings): void;
