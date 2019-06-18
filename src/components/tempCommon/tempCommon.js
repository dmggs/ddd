import {Button} from 'mint-ui';
import {Swipe,SwipeItem} from 'mint-ui';
import gonggao from '@/components/tempCommon/gonggao'
import { Navbar, TabItem } from 'mint-ui';
import { Search } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Cell } from 'mint-ui';





export default (Vue) => {
  // console.log(Vue);
  // 定义全局组件
  Vue.component(Button.name, Button);
  Vue.component(Search.name, Search);
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
  Vue.component("gonggao", gonggao);
  Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);

}
