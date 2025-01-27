type ROUTES_PARAMS = {
	path: string;
	params?: Record<string, string | number>;
};

enum ROUTES_NAME {
	HOME = 'HOME',
}

const ROUTES: Record<ROUTES_NAME, ROUTES_PARAMS> = {
	[ROUTES_NAME.HOME]: {
		path: '/',
	},
};

export { ROUTES };
