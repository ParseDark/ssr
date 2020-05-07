import { matchPath} from 'react-router';

export default (path,routeList)=>{
    let route;
    for (var item of routeList) {
        console.log('in loop', path, item, matchPath((path, item)))
        if (matchPath(path, item.path)) {
            route = item;//查找到第一个路由后停止查找
            break;
        }
    }
    console.log('result is', route)
    return  route;
}
