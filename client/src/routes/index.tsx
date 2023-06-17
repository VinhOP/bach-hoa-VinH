import { DefaultLayout } from '../layouts';
import { Home } from '../pages';
import Category from '../pages/Category';

export const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/:category',
        component: Category,
        layout: DefaultLayout,
    },
];
