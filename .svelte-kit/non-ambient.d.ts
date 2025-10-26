
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/contact" | "/library" | "/portfolio" | "/projects" | "/projects/[project]";
		RouteParams(): {
			"/projects/[project]": { project: string }
		};
		LayoutParams(): {
			"/": { project?: string };
			"/about": Record<string, never>;
			"/contact": Record<string, never>;
			"/library": Record<string, never>;
			"/portfolio": Record<string, never>;
			"/projects": { project?: string };
			"/projects/[project]": { project: string }
		};
		Pathname(): "/" | "/about" | "/about/" | "/contact" | "/contact/" | "/library" | "/library/" | "/portfolio" | "/portfolio/" | "/projects" | "/projects/" | `/projects/${string}` & {} | `/projects/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/robots.txt" | "/style/style.css" | string & {};
	}
}