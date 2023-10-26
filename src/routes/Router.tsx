import { lazy } from 'react';
import { EnumPaths, RoutesProps } from '../types/router';

const Landing = lazy(() => import('../pages/Landing'));
const ListAll = lazy(() => import('../pages/ListAll'));
const Details = lazy(() => import('../pages/Details'));

const Router: RoutesProps[] = [
	{
		path: EnumPaths.Router.Landing,
		name: 'Landing',
		element: <Landing />,
	},
	{
		path: EnumPaths.Router.ListAll,
		name: 'ListAll',
		element: <ListAll />,
	},
	{
		path: EnumPaths.Router.Details,
		name: 'Details',
		element: <Details />,
	},
];

export default Router;
