import axios from 'axios'

import MockAdapter from 'axios-mock-adapter';
import {
  UsersData
} from './data/userInfo'

let mock = new MockAdapter(axios);

mock.onPost('/login').reply(config => {
  console.log(config)
   var reqdata=JSON.parse(config.data).params
    for (var i=0;i<UsersData.length;i++) {
        if (UsersData[i].username==reqdata.username) {
            if (UsersData[i].password==reqdata.password) {
              return [200,{ code: 1,data:UsersData[i],msg:"登录成功!"}];
            }else{
              return [200,{ code: 2,msg:"密码错误"}];
            }
        }
      
    }
    return [200,{ code: 0,msg:"账号不存在"}];
 
});
mock.onPost('../register').reply(config=>{
  var reqdata=JSON.parse(config.data).params
  UsersData.forEach((res)=>{
        if(res.username==reqdata.usename){
          return [200,{ code: -1,msg:"用户名已存在,请重新输入"}];
        }else{
          UsersData.push(reqdata)
          return [200,{ code: 1,msg:"注册成功"}];
        }
  })
})

export default axios; //注意暴露axios
