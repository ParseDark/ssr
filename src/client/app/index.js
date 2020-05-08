//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from '../router/index';
import { BrowserRouter} from 'react-router-dom';
import routeList from '../router/route-config';
import matchPath from "react-router/modules/matchPath";

function clientRender() {
    //初始数据
    let initialData =JSON.parse( document.getElementById('ssrTextInitData').value);

    //查找路由
    let route = matchPath(document.location.pathname,routeList);

    if (route) {
        //设置组件初始化数据
        route.initialData = initialData;
    }

    //渲染index
    ReactDom.hydrate(<BrowserRouter>
            <App routeList={routeList}/>
        </BrowserRouter>
        , document.getElementById('root'))

}
//渲染入口
clientRender();

//开发环境才会开启
if (process.env.NODE_ENV==='development' &&  module.hot) {
    module.hot.accept();
}

