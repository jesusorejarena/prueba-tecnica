export type RoutesProps = {
	path: string;
	name: string | null;
	element: JSX.Element;
	visible?: boolean;
	children?: RoutesProps[];
};

enum Router {
	Landing = '',
	ListAll = '/all/:category',
	Details = '/all/:category/details/:id',
}

export const EnumPaths = {
	Router,
};
