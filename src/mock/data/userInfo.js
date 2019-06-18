import Mock from 'mockjs';
const UsersData = [
    {
      id: 1,
      username: 'admin',
      password: '123456',
      imgs: 'https://res.bestcake.com/m-images/order/mw-person-tx.png',
      name: '达康书记',
      sex:'男',
      tel:'13856563644'
    },
    {
      id: 2,
      username: 'dmgg',
      password: '123456',
      imgs: 'https://res.bestcake.com/m-images/order/mw-person-tx.png',
      name: 'Dmgg',
      sex:'男' ,
      tel:'1585654758'
    }
   
  ];

var data=  Mock.mock({
  "string|1-10": "★"
})

  console.log(data)

// //导出多个数据
export { UsersData };