const routes = [
  // Home page
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
         component: () => import('/src/pages/home/HomePage.vue'),
         name: 'home-page',
        
      },
  
     { path: 'market-place',
      component: () => import('src/pages/courses/MarketPlace.vue'),
      name: 'market-place',
      children:[
        {
          path:'product-list-view',
          component: () => import('src/pages/courses/components/ProductView/ProductListView.vue'),
          name:'product-list-view',
        },
       
      ]
     
   },
      
    ]
  },
  
  // Login and sign up page
  {
    path: '/auth',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: 'login', 
        name: 'login-page',
        component: () => import('src/pages/Auth/LoginPage.vue')
       },
       { path: 'sign-up', 
        name: 'sign-up-page',
        component: () => import('src/pages/Auth/SignupPage.vue')
       },
      
    ]
  },
  
  // After login layout
  {
    path: '/logined',
    component: () => import('layouts/LoginedLayout.vue'),
    children: [
      { path: '',
         component: () => import('/src/pages/home/HomePageLogined.vue'),
         name: 'home-page-logined',
        
      },
      
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
