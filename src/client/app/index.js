//client/app/index.js
//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import App from '../router/index';
import { BrowserRouter } from 'react-router-dom';
import routeList from '../router/route-config';
import matchRoute from '../../share/match-route';
import proConfig from '../../share/pro-config';
import StyleContext from 'isomorphic-style-loader/StyleContext';

import { Provider } from 'react-redux';
import getStore from '../../share/redux/store';

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss());//客户端执行，插入style
    return () => removeCss.forEach(dispose => dispose());//组件卸载时 移除当前的 style 标签
}

function renderDom(routeList, initialData) {
    const store = getStore(initialData);
    window.__STORE__ = store;
    //渲染index
    ReactDom.hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <StyleContext.Provider value={{ insertCss }}>
                    <App routeList={routeList} />
                </StyleContext.Provider>
            </BrowserRouter>
        </Provider>
        , document.getElementById('root'))
}


function clientRender(routeList) {
    let initialData = JSON.parse(document.getElementById('ssrTextInitData').value);
    window.__INITIAL_DATA__ = initialData || {};

    //查找路由
    let matchResult = matchRoute(document.location.pathname, routeList);
    let { targetRoute } = matchResult;
    if (targetRoute) {
        //设置组件初始化数据
        targetRoute.initialData = initialData;
        //等待异步脚本加载完成
        if (targetRoute.component && targetRoute.component.name === 'asyncFn') {
            targetRoute.component().props.load().then(res => {
                //异步组件加载完成后再渲染页面
                console.log('异步组件加载完成.');
                //设置已加载完的组件，否则需要重新请求
                targetRoute.component = res ? res.default : null;
                renderDom(routeList, initialData);

            });
        }

    } else {
        renderDom(routeList);

    }
}

//渲染入口
clientRender(routeList);

//开发环境才会开启
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept();
}
