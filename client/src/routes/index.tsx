import { FC } from 'react';
import { AdminLayout, DefaultLayout } from '../layouts';
import { Category, Home, Error } from '../pages';
import { AdminCategory, AdminProducts, AdminAddProducts } from '../pages/Admin';

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
        path: '/admin/products',
        component: AdminCategory,
        layout: AdminLayout,
    },
    {
        path: '/admin/products/:product',
        component: AdminProducts,
        layout: AdminLayout,
    },
    {
        path: '/admin/add-products',
        component: AdminAddProducts,
        layout: AdminLayout,
    },
    {
        path: '/*',
        component: Error,
        layout: AdminLayout,
    },
];
