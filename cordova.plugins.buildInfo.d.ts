// Type definitions for cordova.plugins.buildInfo

/// <reference types="cordova" />

interface BuildInfo {
    baseUrl: null | string;
	packageName: string;
	basePackageName: string;
	displayName: string;
	name: string;
	version: string;
	versionCode: number;
	debug: boolean;
	buildDate: null | Date;
	installDate: null | Date;
	buildType: string;
	flavor: string;
}

interface CordovaPlugins {
    BuildInfo: BuildInfo;
}
