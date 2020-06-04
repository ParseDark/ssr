//list 组件
import React from 'react';
import { Link } from 'react-router-dom';
import css from './index.scss';

import PageContainer from '../../common/components/page-container';


 class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {list=[]} = this.props;

        return <div className="book-list">
            {
                list.map(item=>{
                    return <div key={item.id} className="item">
                        <div className="right">
                            <p className="title"><Link to={"/detail/" + item.id}>{item.title}</Link></p>
                            <p className="des">{item.des}</p>
                        </div>
                    </div>
                })
            }
        </div>
    }
}

export default Index;
