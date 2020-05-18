
import React from 'react';
import './index.scss';
import PageContainer from '../common/components/page-container';

import fetchGetList from '../common/fetch/get-list';


function Index(props) {
    console.log('props',props);
    const { fetchData } = props.initialData||{};
    return <div className="page-index-box">
        <p>首页</p>
    </div>
}

Index.getInitialProps = async (ctx) => {

    let res = await fetchGetList();
    let data = res.code === 0 ? res.data : [];

    return {
        fetchData: data,
        page: {
            tdk: {
                title: '首页 - koa-react-ssr',
                keywords: '关键词 - koa-react-ssr',
                description: '描述'
            }
        }
    };
}

export default PageContainer(Index);
