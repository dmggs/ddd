import request from "./http"
import axios from "@/mock/mock"
import params from "./params"
import  mock from "@/mock/mock" //我拿的是 mock.js里面的axios模块
// console.log(params.v);

class Apls {

  //轮播接口
  GetBannerList(data) {
    return request({
      method: "get",
      url: '/json1811.ashx',
      params: data
    })
  }
  //首页数据接口
  GetIndexCakeList(data) {
    return request({
      method: "get",
      url: '/json1811.ashx',
      params: data
    })
  }
  //分类页数据接口
  GetJdListNew(data) {
    return request({
      method: "get",
      url: '/json1811.ashx',
      params: data
    })
  }

  //广告数据详情接口
  GetNSCakeByName(data) {
    return request({
      method: "get",
      url: '/json1811.ashx',
      params: {
        Name: data.Name,
        c: "NsCakeCenter",
        m: "GetNSCakeByName",
        v: params.v
      }
    })
  }
  // 其他数据接口
  GetCakeByName(data) {
    return request({
      method: "get",
      url: '/json1811.ashx',
      params: {
        City: "上海",
        ProName: data.ProName,
        c: "Product",
        m: "GetCakeByName",
        v:params.v
      }
    })
  }
  //乳品数据接口
  GetRuPCakeByName(data) {
    return request({
      method: "get",
      url: '/json1811.ashx',
      params: {
        City: "上海",
        Name: data.Name,
        c: "NsCakeCenter",
        m: "GetRuPCakeByName",
        v: params.v
      }
    })
  }
  //伴手礼详情接口
  GetjzCakeInfo(data) {
    return request({
      method: "get",
      url: '/json1811.ashx',
      params: {
        City: '上海',
        ProName: data.ProName,
        c: 'IndexCenter',
        m: 'GetjzCakeInfo',
        v: params.v

      }
    })
  }

  // mokeLogin(data){

  // 	return axios.get("/login",{params:data})
  // }
  mokeLogin(data){
		return mock.post("/login",{params:data})
  }                         
 

}


export default new Apls();
