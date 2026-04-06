/// <reference path="../.astro/types.d.ts" />

declare global {
	interface Window {
		CMS_MANUAL_INIT?: boolean;
		CMS_CONFIG?: Record<string, unknown>;
		CMS?: {
			init: (options: { config: Record<string, unknown>; load_config_file: boolean }) => void;
		};
	}
}

export {};