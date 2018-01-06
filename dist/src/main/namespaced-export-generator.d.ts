export interface GenerateNamespacedExportSettings {
    sourceGlobs: string[];
    outputDirectory: string;
    outputFileName: string;
}
export declare function generateNamespacedExport(settings: GenerateNamespacedExportSettings): void;
