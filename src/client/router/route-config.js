import React from 'react';
import AsyncLoader from "../components/AsyncBundleHC";

function pageNotFound() {
    return <div>404页面</div>
}

export default [
    {
        path:'/index',
        component: AsyncLoader(() => import(/*webpackChunkName:"chunk-index"*/'../pages/index')),
        exact:true
    },
    {
        path: '/list',
        component: AsyncLoader(() => import('../pages/list')),
        exact: true
    },
    {
        path: '*',
        component: pageNotFound,
        exact: true
    }
]

