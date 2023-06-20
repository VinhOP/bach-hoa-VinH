import { ComponentType, FC, ReactElement } from 'react';
import { AdminLayout, DefaultLayout } from '../layouts';
import { Category, Home, AdminProducts, Error } from '../pages';
import AddProducts from '../pages/Admin/AddProducts';
import ProductsType from '../pages/Admin/ProductsType';
import { Navigate } from 'react-router-dom';

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
        component: AdminProducts,
        layout: AdminLayout,
    },
    {
        path: '/admin/products/mi-goi',
        component: ProductsType,
        layout: AdminLayout,
    },
    {
        path: '/admin/add-products',
        component: AddProducts,
        layout: AdminLayout,
    },
    {
        path: '/*',
        component: Error,
        layout: AdminLayout,
    },
];
