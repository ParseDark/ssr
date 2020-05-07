// src/client/router/indxex.js
//路由配置文件

import Layout from '../app/layout';
import React  from 'react';
import { Route, Switch } from 'react-router-dom';

const Page404 = () => (<div>not found</div>)

//服务端也会用到所以通过参数的方式将配置传递进来
function App({routeList}) {
    return (
        <Layout>
            <Switch>
                {
                    routeList.map(item=>{
                        //判断是否有初始数据
                        return item.initialData ? <Route key={item.path} exact={item.exact} path={item.path}  render={(props)=>{
                            props.initialData = item.initialData;
                            return <item.component {...props}></item.component>
                        }}></Route> : <Route key={item.path} {...item}></Route>
                    })
                }
                <Route to="*" component={Page404}></Route>
            </Switch>
        </Layout>
    );
}

export default App;
