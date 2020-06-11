//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter, Route } from 'react-router';

import { Helmet } from 'react-helmet';

import StyleContext from 'isomorphic-style-loader/StyleContext';

import routeList from '../../client/router/route-config';

import App from '../../client/router/index';

import matchRoute from '../../share/match-route';

import getStaticRoutes from "../../share/getStaticRoutes";

//导入资源处理库
import getAssets from '../common/assets';

import proConfig from '../../share/pro-config';

import { Provider } from "react-redux";
import getStore from '../../share/redux/store';



export default async (ctx, next) => {

    try {
        let html = "";//组件渲染结果
        let tdk = {
            title: '默认标题 - my react ssr',
            keywords: '默认关键词',
            description: '默认描述'
        }
        let helmet = {
            title: '',
            meta: ''
        };
        let assetsMap = {
            js: [],
            css: []
        };
        let styles = [];
        let fetchDataFn, fetchResult = {};

        if (proConfig.__IS_SSR__) {
            const path = ctx.request.path;

            if (path.indexOf('.') > -1) {
                ctx.body = null;
                return next();
            }

            console.log('ctx.request.path.', ctx.request.path);

            const staticRoutesList = await getStaticRoutes(routeList);
            //查找到的目标路由对象
            let matchResult = matchRoute(path, staticRoutesList);
            let { targetRoute, targetMatch } = matchResult;

            //得到 store,默认没有数据
            const store = getStore();

            //进行数据预取，更新 store 内的数据
            if (targetRoute) {
                fetchDataFn = targetRoute.component ? targetRoute.component.getInitialProps : null;
                if (fetchDataFn) {
                    fetchResult = await fetchDataFn({ store });//更新 state 
                }
            }

            console.log('getinitData', targetRoute, '---> ')

            let { page } = fetchResult || {};

            if (page && page.tdk) {
                tdk = page.tdk;
            }

            //将预取数据在这里传递过去 组内通过props.staticContext获取
            const context = {};
            console.log('ssr static data', context);

            console.log('---> start render to string')


            const css = new Set() // CSS for all rendered React components
            const insertCss = (...styles) => styles.forEach(style => css.add(style._getContent()));

            html = renderToString(
                <Provider store={store}>
                    <StaticRouter location={path} context={context}>
                        <StyleContext.Provider value={{ insertCss }} >
                            <App routeList={staticRoutesList}></App>
                        </StyleContext.Provider>
                    </StaticRouter>
                </Provider>
            );

            helmet = Helmet.renderStatic();
            console.log("helmet is -> ", helmet);

            [...css].forEach(item => {
                let [mid, content] = item[0];
                styles.push(`<style id="s${mid}-0">${content}</style>`)
            });


        }
        //静态资源
        assetsMap = getAssets();
        console.log('css', styles);

        console.log("assetsMap\n", assetsMap)
        console.log("styles\n", styles)

        ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${assetsMap.css.join('')}
    ${styles.join('')}
    <meta name="keywords" content="${tdk.keywords}" />
    <meta name="description" content="${tdk.description}" />
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
