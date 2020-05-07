import React from 'react';

//组件
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    handlerClick(){
        alert('一起来玩 react 服务端渲染..');
    }

    render() {
        const str='hello,world.';
        return <div>list</div>
    }
}
