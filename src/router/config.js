export default {
  routes: [
    {
      name: 'home',
      path: '/',
      meta:{title:'首页',keepAlive:true},
      component: ()=> import("@src/layout/home.vue"),
    },
    {
      name: 'documentColor',
      path: '/document/color',
      meta:{title:'颜色',keepAlive:true},
      component: ()=> import("@view/document/index1.vue")
    },
    {
      name: 'documentFont',
      path: '/document/font',
      meta:{title:'字体',keepAlive:true},
      component: ()=> import("@view/document/index2.vue")
    },
    {
      name: 'documentIcon',
      path: '/document/icon',
      meta:{title:'图标',keepAlive:true},
      component: ()=> import("@view/document/index3.vue")
    },
    {
      name: 'documentButton',
      path: '/document/button',
      meta:{title:'按钮',keepAlive:true},
      component: ()=> import("@view/document/index4.vue")
    },
    {
      name: 'documentTabs',
      path: '/document/tabs',
      meta:{title:'标签页',keepAlive:true},
      component: ()=> import("@view/document/index5.vue")
    },
    {
      name: 'documentInput',
      path: '/document/input',
      meta:{title:'文本框',keepAlive:true},
      component: ()=> import("@view/document/index6.vue")
    },    
    {
      name: 'documentSelect',
      path: '/document/select',
      meta:{title:'下拉框',keepAlive:true},
      component: ()=> import("@view/document/index7.vue")
    },
    {
      name: 'documentRadio',
      path: '/document/radio',
      meta:{title:'复选框',keepAlive:true},
      component: ()=> import("@view/document/index8.vue")
    },
    {
      name: 'documentDate',
      path: '/document/date',
      meta:{title:'日期',keepAlive:true},
      component: ()=> import("@view/document/index9.vue")
    },
    {
      name: 'documentUpload',
      path: '/document/upload',
      meta:{title:'文件上传',keepAlive:true},
      component: ()=> import("@view/document/index10.vue")
    },
    {
      name: 'documentLayout',
      path: '/document/layout',
      meta:{title:'布局',keepAlive:true},
      component: ()=> import("@view/document/index11.vue")
    },
    {
      name: 'documentTable',
      path: '/document/table',
      meta:{title:'表格',keepAlive:true},
      component: ()=> import("@view/document/index12.vue")
    },
    {
      name: 'documentList',
      path: '/document/list',
      meta:{title:'列表',keepAlive:true},
      component: ()=> import("@view/document/index13.vue")
    },    
    {
      name: 'documentForm',
      path: '/document/form',
      meta:{title:'表单',keepAlive:true},
      component: ()=> import("@view/document/index14.vue")
    }, 
    {
      name: 'documentPreview',
      path: '/document/preview',
      meta:{title:'文件预览',keepAlive:true},
      component: ()=> import("@view/document/index15.vue")
    }, 
    
    {
      name: 'documentMessage',
      path: '/document/message',
      meta:{title:'提示',keepAlive:true},
      component: ()=> import("@view/document/index17.vue")
    }, 
    {
      name: 'documentErrorPage',
      path: '/document/errorPage',
      meta:{title:'404页面',keepAlive:true},
      component: ()=> import("@view/document/index16.vue")
    }, 
    {
      name: 'documentLoading',
      path: '/document/loading',
      meta:{title:'loading',keepAlive:true},
      component: ()=> import("@view/document/index18.vue")
    }, 
    
    









    {
      name: 'page1',
      path: '/page1',
      meta:{title:'示例页面1',keepAlive:true},
      component: ()=> import("@view/page1/index.vue")
    },
    {
      name: 'page2',
      path: '/page2',
      meta:{title:'示例页面2',keepAlive:true},
      component: ()=> import("@view/page2/index.vue")
    },    
    {
      name: 'page3',
      path: '/page3',
      meta:{title:'示例页面2',keepAlive:true},
      component: ()=> import("@view/page3/index.vue")
    }, 
   



    // 这个要放在最后
    {
      name: '404',
      path: '/404',
      meta:{title:'404',keepAlive:true},
      component: ()=> import("@src/router/404.vue")
    }, 
    {
      path:"*",
      redirect:"/404"
    } 
  ]
}
