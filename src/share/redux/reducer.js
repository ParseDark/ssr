//列表页面的子 reducer
import { reducer as listPage } from '../../client/pages/list/redux/index';

//关于页面的子 reducer
import { reducer as aboutPage } from '../../client/pages/about/redux/index';

//合并多个 reducer
import { combineReducers } from 'redux';

export default combineReducers({
    listPage,
    aboutPage
});
