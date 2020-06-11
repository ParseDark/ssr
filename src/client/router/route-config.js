import React from 'react';
import AsyncLoader from "../components/AsyncBundleHC";

function pageNotFound() {
    return <div>404页面</div>
}

export default [
    {
        path: '/index',
        component: AsyncLoader(() => import(/*webpackChunkName:"chunk-index"*/'../pages/index')),
        exact: true
    },
    {
        path: '/list',
        component: AsyncLoader(() => import(/*webpackChunkName:"chunk-index"*/'../pages/list/list')),
        exact: true
    },
    {
        path: '/about',
        component: AsyncLoader(() => import(/*webpackChunkName:"chunk-index"*/'../pages/about')),
        exact: true
    },
    {
        path: '*',
        component: pageNotFound,
        exact: true
    }
]

