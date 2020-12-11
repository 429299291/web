
import Index from './components/index.vue'
import Profile from './components/profile.vue'
import News from './components/news/news.vue'
export default [
  {path:'/',component:Index,name: "index"},
  {path:'/profile',component:Profile,name: "profile"},
  {path:'/xixi',component:() =>import('./components/xixi.vue'),name: "xixi"},
  {path:'/news',component:News,name: "news"},
  {path:'/news1',component:()=>import('./components/news/news1.vue'),name: "news1"},
  {path:'/news2',component:()=>import('./components/news/news2.vue'),name: "news2"},
  // {path:'/news3',component:()=>import('./components/news/news3.vue'),name: "news3"},
  // {path:'/news4',component:()=>import('./components/news/news4.vue'),name: "news4"},
  // {path:'/news5',component:()=>import('./components/news/news5.vue'),name: "news5"},
  {path:'/news6',component:()=>import('./components/news/news6.vue'),name: "news6"},
  // {path:'/news7',component:()=>import('./components/news/news7.vue'),name: "news7"},
  // {path:'/news8',component:()=>import('./components/news/news8.vue'),name: "news8"},
  {path:'/news9',component:()=>import('./components/news/news9.vue'),name: "news9"},
  {path:'/news10',component:()=>import('./components/news/news10.vue'),name: "news10"},
  {path:'/news11',component:()=>import('./components/news/news11.vue'),name: "news11"},
  {path:'/news12',component:()=>import('./components/news/news12.vue'),name: "news12"},
  {path:'/news13',component:()=>import('./components/news/news13.vue'),name: "news13"},
  {path:'/news14',component:()=>import('./components/news/news14.vue'),name: "news14"},
  {path:'/news15',component:()=>import('./components/news/news15.vue'),name: "news15"},
  {path:'/news16',component:()=>import('./components/news/news16.vue'),name: "news16"},
  {path:'/news17',component:()=>import('./components/news/news17.vue'),name: "news17"},
  {path:'/news18',component:()=>import('./components/news/news18.vue'),name: "news18"},
  {path:'/news19',component:()=>import('./components/news/news19.vue'),name: "news19"},
  {path:'/news20',component:()=>import('./components/news/news20.vue'),name: "news20"},
  {path:'/news21',component:()=>import('./components/news/news21.vue'),name: "news21"},
  {path:'/news22',component:()=>import('./components/news/news22.vue'),name: "news22"},
  {path:'/news23',component:()=>import('./components/news/news23.vue'),name: "news23"},
  {path:'/news24',component:()=>import('./components/news/news24.vue'),name: "news24"},
  {path:'/news25',component:()=>import('./components/news/news25.vue'),name: "news25"},
  {path:'/news26',component:()=>import('./components/news/news26.vue'),name: "news26"},
  {path:'/news27',component:()=>import('./components/news/news27.vue'),name: "news27"},
  {path:'/design',component:()=>import('./components/design.vue'),name: "design"},
  {path:'/python',component:()=>import('./components/python.vue'),name: "python"},
  {path:'/web',component:()=>import('./components/web.vue'),name: "web"},
  {path:'/wx',component:()=>import('./components/wx.vue'),name: "wx"},
  {path:'/data',component:()=>import('./components/data.vue'),name: "data"},
  {path:'/data_global',component:()=>import('./components/data_global.vue'),name: "data_global"},
  {path:'/data_3d',component:()=>import('./components/data_3d.vue'),name: "data_3d"},
  {path:'/seo',component:()=>import('./components/seo.vue'),name: "seo"},
  {path:'/1',component:()=>import('./components/helloworld.vue'),name: "helloworld"},
  {path:'/2',component:()=>import('./components/helloworld2.vue'),name: "helloworld2"},
  {path:'*',redirect:"/"}
]