//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter, Route} from 'react-router';

import { Helmet } from 'react-helmet';

import routeList from '../../client/router/route-config';

import App from '../../client/router/index';

import matchRoute from '../../share/match-route';

import getStaticRoutes from "../../share/getStaticRoutes";

//导入资源处理库
import  getAssets from '../common/assets';

import proConfig from '../../share/pro-config';


//得到静态资源
const assetsMap = getAssets();

export default  async (ctx,next)=>{

    try {
    const path = ctx.request.path;

    if(path.indexOf('.')>-1){
        ctx.body=null;
        return next();
    }

    console.log('ctx.request.path.', ctx.request.path);

    const staticRoutesList = await getStaticRoutes(routeList);
    //查找到的目标路由对象
    let matchResult = matchRoute(path, staticRoutesList);
    let { targetRoute, targetMatch } = matchResult;
    console.log('targetMatch', targetMatch);
    //得到数据;
        let fetchResult = {};
    let fetchDataFn;
    if (targetRoute){
        fetchDataFn = targetRoute.component ?targetRoute.component.getInitialProps:null;
        if (fetchDataFn) {
            fetchResult = await fetchDataFn();
        }
    }

    console.log('getinitData', targetRoute, '---> ')

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
    console.log('ssr static data', context);

    //渲染的路由和数据
    const props = {
        routeList
    }

    console.log('---> start render to string')


        // const html = renderToString(<StaticRouter >
        //     <Layout><targetRoute.component initialData={fetchResult} ></targetRoute.component></Layout>
        // </StaticRouter>);
        const html = renderToString(<StaticRouter location={path} context={context}>
            <App routeList={staticRoutesList}></App>
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
<script>
window.__IS__SSR__=${proConfig.__IS_SSR__};
</script>
 ${assetsMap.js.join('')} 
</html>`;
    await next();
    } catch (e) {
        console.log('error happen: ', e)
    }


}
