import Vue from 'vue'
import Router from 'vue-router'
import api from '@/core/api/index'
// console.log(global.getParam())


Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: '/',
    component: resolve => require(['@/components/home'], resolve),
    redirect: "index",
    children: [{
        path: 'index',
        name: 'index',
        component: resolve => require(['@/components/main/index'], resolve),
        meta: {
          keepAlive: true //true 禁止重复加载, false不禁止
          //可以取定义其他属性值,来进行区别
        },
      },
      {
        path: 'list',
        name: 'list',
        component: resolve => require(['@/components/main/list'], resolve),
        redirect: "list/zy",
        children: [{
            path: 'zy',
            name: 'zy',
            component: resolve => require(['@/components/child/ziying'], resolve),
            meta: {
              keepAlive: true
            },
            redirect: "zy/jd",
            children: [{
                path: 'jd',
                name: 'jd',
                component: resolve => require(['@/components/child/zy-jd'], resolve),
                meta: {
                  keepAlive: true
                },
              },
              {
                path: 'ns',
                name: 'ns',
                component: resolve => require(['@/components/child/zy-ns'], resolve),
                meta: {
                  keepAlive: true
                },
              },
              {
                path: 'bsl',
                name: 'bsl',
                component: resolve => require(['@/components/child/zy-bsl'], resolve),
                meta: {
                  keepAlive: true
                }

              }
            ]
          },
          {
            path: 'bs',
            name: 'bs',
            component: resolve => require(['@/components/child/beisiyanxuan'], resolve),
            redirect: "bs/rp",
            children: [{
              path: 'rp',
              name: 'rp',
              component: resolve => require(['@/components/child/bs-rp'], resolve),
              meta: {
                keepAlive: true
              }
            }]
          }
        ]
      },
      {
        path: 'cart',
        name: 'cart',
        component: resolve => require(['@/components/main/cart'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'my',
        name: 'my',
        component: resolve => require(['@/components/main/my'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'show',
        name: 'show',
        component: resolve => require(['@/components/main/show'], resolve),
      },
      {
        path: 'useinfo',
        name: 'useinfo',
        component: resolve => require(['@/components/main/useinfo'], resolve),
       
      },
      {
        path: 'register',
        name: 'register',
        component: resolve => require(['@/components/main/register'], resolve),
       
      },
    ]

  }]
})



export default router;
