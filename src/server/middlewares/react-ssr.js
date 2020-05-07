//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter, Route, matchPath} from 'react-router';

import routeList from '../../client/router/route-config';


import matchRoute from '../../share/match-route';

import App from '../../client/router/index';

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

    //将预取数据在这里传递过去 组内通过props.staticContext获取
    const context = {
        initialData: fetchResult
    };

    console.log('---> start render to string')

    try {

    const html = await renderToString(<StaticRouter location={path} context={context}>
            <App routeList={routeList}></App>
        </StaticRouter>);

   console.log('data', context);
   console.log('html')
    console.log('html', html);

    ctx.body=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
</head>
<body>
    <div id="root">
       ${html}
    </div>
    <textarea id="ssrTextInitData" style="display:none;">
    ${JSON.stringify(fetchResult)}
    </textarea>
</body>
</html><script type="text/javascript"  src="/index.js"></script>`;
    await next();
    } catch (e) {
        console.log('error happen: ', e)
    }


}
