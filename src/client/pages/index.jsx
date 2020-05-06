import React from 'react';

class ClickDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    handlerClick(){
        alert('一起来玩 react ssr 啊');
    }

    render() {
        return <h1 onClick={this.handlerClick}>click here!</h1>
    }
}

export default class Index extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Hello world</h1>
                <ClickDemo />
            </>
        )
    }
}
