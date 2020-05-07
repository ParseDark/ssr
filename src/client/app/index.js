//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from '../router/index';
import { BrowserRouter} from 'react-router-dom';
import routeList from '../router/route-config';

function clientRender() {
    //初始数据
    let initialData =JSON.parse( document.getElementById('ssrTextInitData').value);

    //查找路由
    let route = matchRoute(document.location.pathname,routeList);

    //设置组件初始化数据 [关键点]
    route.initialData =initialData;

    //渲染index
    ReactDom.hydrate(<BrowserRouter>
            <App routeList={routeList}/>
        </BrowserRouter>
        , document.getElementById('root'))

}
//渲染入口
clientRender();


