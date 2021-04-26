// 平台 菜单配置 文件
/**
 *   菜单数据结构参考：https://www.iviewui.com/components/menu  
 *       icon 图标库：  https://www.iviewui.com/components/icon
 *      
 */
export default [
    {
      id: "1",
      children: [
        {
            id:"1-1",    
            name: "供应商管", 
            path:"/page1",
            icon:"ios-analytics",             
        },
        {
            id:"1-2",
            name: "采购项目管理",
            path:"/page2",
            icon:"ios-analytics",  
        },
      ]
    },
    {
      id: "2",
      name: "vue 平台",
      platformName:'vue',
      platformHttps:"http://182.168.1.221/vuePlatform",
      children: [
          {
              id:"2-1",
              name: "vue页面1", 
              platformName:'vue',
              platformHttps:"http://182.168.1.221/vuePlatform",
              pathURL:"/platform/page1",            
              icon:"logo-buffer",
          },
          {
              id:"2-2",
              name: "vue页面2", 
              platformName:'vue',
              platformHttps:"http://182.168.1.221/vuePlatform",
              pathURL:"/platform/page2",            
              icon:"logo-buffer",
          },
          {
              id:"2-3",
              name: "vue页面3", 
              platformName:'vue',
              platformHttps:"http://182.168.1.221/vuePlatform",
              pathURL:"/platform/page3",            
              icon:"logo-buffer",
          },                                    
      ]
    },  
    {
      id: "3",
      name: "无路由的平台",
      platformName:'w3c',
      platformHttps:"https://www.w3school.com.cn/index.html",
      children: [
          {
              id:"3-1",
              name: "html", 
              platformName:'w3c',
              platformHttps:"https://www.w3school.com.cn/index.html",
              pathURL:"https://www.w3school.com.cn/html/index.asp",   
              notRouter: true,         
              icon:"logo-buffer",
          },
          {
              id:"3-2",
              name: "css", 
              platformName:'w3c',
              platformHttps:"https://www.w3school.com.cn/index.html",
              pathURL:"https://www.w3school.com.cn/css/index.asp",  
              notRouter: true,         
              icon:"logo-buffer",
          },                                   
      ]
    },                      
  ];