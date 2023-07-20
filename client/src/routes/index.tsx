import { FC } from 'react';
import { AdminLayout, DefaultLayout } from '../layouts';
import { Category, Home, Error } from '../pages';
import { AdminCategories, AdminProducts } from '../pages/Admin';
import Product from '../pages/Product';

interface IRoutes {
    path: string;
    component: FC;
    layout: FC;
    [key: string]: string | FC;
}

export const publicRoutes: IRoutes[] = [
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
    {
        path: '/:category/:product',
        component: Product,
        layout: DefaultLayout,
    },
    {
        path: '/admin/category',
        component: AdminCategories,
        layout: AdminLayout,
    },
    {
        path: '/admin/category/:product',
        component: AdminProducts,
        layout: AdminLayout,
    },
    {
        path: '/*',
        component: Error,
        layout: AdminLayout,
    },
];
