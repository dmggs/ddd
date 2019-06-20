import Vue from "vue";
import Vuex from "vuex";
import apis from "@/core/api/index"
import Store from 'storejs'
import { MessageBox } from "mint-ui";
// console.log("OK");
Vue.use(Vuex);

//定义属性值  data
const state = {
  shopCart: {
    nums: 0,
    list: []
  }

}
//定义同步方法
const mutations = {
  vuexInit(state) {
    state.shopCart.list = Store.get("cartList") || [];
    console.log(Store.get("cartList"));
    // isLogin
  },
  add(state, data) {
    // console.dir(Store);
    if (state.shopCart.list.length > 0) {
      var con = true;
      state.shopCart.list.forEach(ele => {

        if (ele.id == data.id) {
              ele.num+=data.num
        
          con = false
          return
        }
      });
      if (con) {
        state.shopCart.list.push(data)
      }
      state.shopCart.nums++
    } else {
      state.shopCart.list.push(data)
      state.shopCart.nums++
    }
    console.log(state.shopCart.list);
    Store.set("cartList", state.shopCart.list);
  },
  jian(state, data) {
    //购物车页面数量减
    state.shopCart.list.forEach((ele,index)=> {
      if (ele.id == data.id) {
        ele.num--
        if (ele.num <= 0) {
          MessageBox.confirm("", {
           
            title: "是否删除该商品?",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
          })
            .then(action => {
              if (action == "confirm") {
                //确认的回调
                state.shopCart.list.splice(index,1) 
              }
            })
            .catch(err => {
              if (err == "cancel") {
                //取消的回调
                ele.num = 1;
              }
            });
        
        }
      }
    });
    Store.set("cartList", state.shopCart.list);
  },
  jia(state, data) {
    //购物车页面加数量
    console.log(data);
    state.shopCart.list.forEach(ele => {
      if (ele.id == data.id) {
        ele.num++
      }
    });
    Store.set("cartList", state.shopCart.list);
  },
  clear(state){
      state.shopCart.list=[]
      Store.set("cartList",[])
  }
  
}
//定义 computed(属性计算)
const getters = {
  count(state, index) {
    return 1
    //state.shopCart.list[index].num * state.shopCart.list[index].price;
  }
}

//定义异步方法,可以在这个里面做一些异步操作,比如调用通用数据接口
const actions = {
  syFn(context) {
    // context.state  可以取 state 属性
    // context.commit  可以调用 mutations 同步方法 属性
    // context.dispatch可以调用 actions 异步方法 属性
    // 在组件里面调用 也是一样,同上面的方法一直 
  },
  test(context, data) {
    console.log(data)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
