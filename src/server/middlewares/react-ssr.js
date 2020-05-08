//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter, Route} from 'react-router';

import { Helmet } from 'react-helmet';

import routeList from '../../client/router/route-config';

import Layout from '../../client/app/layout';


import matchRoute from '../../share/match-route';

//导入资源处理库
import  getAssets from '../common/assets';


//得到静态资源
const assetsMap = getAssets();

export default  async (ctx,next)=>{

    const path = ctx.request.path;

    if(path.indexOf('.')>-1){
        ctx.body=null;
        return next();
    }

    console.log('ctx.request.path.', ctx.request.path);

    //查找到的目标路由对象
    let matchResult = matchRoute(path,routeList);
    let targetRoute=matchResult;

    //得到数据
    let fetchDataFn = targetRoute.component.getInitialProps;
    let fetchResult = {};
    if(fetchDataFn){
        fetchResult = await fetchDataFn();
    }

    let { page } = fetchResult || {};

    let tdk = {
        title: '默认标题 - my react ssr',
        keywords: '默认关键词',
        description: '默认描述'};

    if(page && page.tdk){
        tdk=page.tdk;
    }

    //将预取数据在这里传递过去 组内通过props.staticContext获取
    const context = {
        initialData: fetchResult
    };

    //渲染的路由和数据
    const props = {
        routeList
    }

    console.log('---> start render to string')

    try {
        const html = renderToString(<StaticRouter>
            <Layout><targetRoute.component initialData={fetchResult} ></targetRoute.component></Layout>
        </StaticRouter>);

        const helmet = Helmet.renderStatic();

        console.log('data', context);
        console.log('html')
        console.log('html', html);

        ctx.body=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${assetsMap.css.join('')}
    <meta name="keywords" content="${tdk.keywords}" />
    <meta name="description" content="${tdk.description}" />getInitialProps
</head>
<body>
    <div id="root">${html}</div>
    <textarea id="ssrTextInitData" style="display:none;">
    ${JSON.stringify(fetchResult)}
    </textarea>
</body>
 ${assetsMap.js.join('')} 
</html>`;
    await next();
    } catch (e) {
        console.log('error happen: ', e)
    }


}
