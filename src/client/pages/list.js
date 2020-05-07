import React from 'react';
import {Link} from 'react-router-dom';
//导入  - 假数据
import tempData from './data';
//组件
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        const initialData = props.staticContext.initialData||{};
        this.state=initialData;
    }
    //静态方法  数据预取方法
    static async  getInitialProps() {
        //模拟数据请求方法
        const fetchData=()=>{
            return new Promise(resolve=>{
                setTimeout(() => {
                    resolve({
                        code:0,
                        data: tempData
                    })
                }, 100);
            })
        }

        let res = await fetchData();

        return res;
    }

    handlerClick(){
        alert('一起来玩 react 服务端渲染');
    }

    render() {
        //渲染逻辑
        const {code,data}=this.state;

        return <div>
            {data && data.map((item,index)=>{
            return <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
        })}
            {!data&&<div>暂无数据</div>}
        </div>
    }

}
