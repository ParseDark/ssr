import React from 'react';

import css from '../index.scss'
import { getInitialData } from './redux/index';
import isoConnect from '.././../common/components/iso-connect'


//组件
class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    static async  getInitialProps({ store }) {
        return store.dispatch(getInitialData());
    }

    render() {
        //渲染数据
        const { fetchData, page } = this.props.initialData;
        const { code, data } = fetchData || {};

        return <div className="book-list">
            {data && data.map((item, index) => {
                return <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            })}
            {!data && <div>暂无数据</div>}
        </div>
    }
}

const mapStateToProps = state => ({
    initialData: state.listPage,
});

const mapDispatchToProps = dispatch => ({
    getInitialData() {
        console.log('dispath fetch data');
        return dispatch(getInitialData());
    }
});

export default isoConnect({
    css,
    mapStateToProps,
    mapDispatchToProps
}, Index);

