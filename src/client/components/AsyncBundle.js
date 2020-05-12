import React from 'react';

const LoadingCompoent = () => <div>loading...</div>

/**
 * 容器组件，组件按需加载器
 *
 * @class Bundle
 * @extends {Component}
 */
export default class AsyncBundle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null//自身状态
        };
    }

    componentDidMount() {
        if (!this.state.mod) {
            this.load(this.props);
        }
    }


    load(props) {
        this.setState({
            mod: null
        });
        //注意这里，使用Promise对象; mod.default导出默认
        props.load().then((mod) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : <LoadingCompoent/>;
    }
}
