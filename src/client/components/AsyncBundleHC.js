//异步加载组件的高阶函数
import AsyncBundle from './AsyncBundle';
import React from 'react';


function AsyncLoader (loader) {

    function asyncFn(props) {
        return <AsyncBundle load={loader} flag={'__IS_ASYNC_COMP_FLAG__'}>
            {(Comp) => <Comp {...props}/>}
        </AsyncBundle>
    }

    return asyncFn;
}

export default AsyncLoader;
