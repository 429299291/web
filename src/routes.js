import index from "./components/index.vue";
import profile from "./components/profile.vue";
import tanxin from "./components/tanxin.vue";
import liaoxing from "./components/liaoxing.vue";
import news from "./components/news/news.vue";
import news1 from "./components/news/news1.vue";
import news2 from "./components/news/news2.vue";
import news3 from "./components/news/news3.vue";
import news4 from "./components/news/news4.vue";
import news5 from "./components/news/news5.vue";
import news6 from "./components/news/news6.vue";
import news7 from "./components/news/news7.vue";
import news8 from "./components/news/news8.vue";
import news9 from "./components/news/news9.vue";
import news10 from "./components/news/news10.vue";
import news11 from "./components/news/news11.vue";
import news12 from "./components/news/news12.vue";
import design from "./components/design.vue";
import web from "./components/web.vue";
import wx from "./components/wx.vue";
import show from "./components/show.vue";
import python from "./components/python.vue";

import data from "./components/data.vue";
import data_global from "./components/data_global.vue";
import data_3d from "./components/data_3d.vue";
import seo from "./components/seo.vue";
import helloworld from "./components/HelloWorld.vue";



export default [
  {path:'/',component:index,name: "index"},
  {path:'/profile',component:profile,name: "profile"},
  {path:'/tanxin',component:tanxin,name: "tanxin"},
  {path:'/liaoxing',component:liaoxing,name: "liaoxing"},
  {path:'/news',component:news,name: "news"},
  {path:'/news1',component:news1,name: "news1"},
  {path:'/news2',component:news2,name: "news2"},
  {path:'/news3',component:news3,name: "news3"},
  {path:'/news4',component:news4,name: "news4"},
  {path:'/news5',component:news5,name: "news5"},
  {path:'/news6',component:news6,name: "news6"},
  {path:'/news7',component:news7,name: "news7"},
  {path:'/news8',component:news8,name: "news8"},
  {path:'/news9',component:news9,name: "news9"},
  {path:'/news10',component:news10,name: "news10"},
  {path:'/news11',component:news11,name: "news11"},
  {path:'/news12',component:news12,name: "news12"},
  {path:'/design',component:design,name: "design"},
  {path:'/python',component:python,name: "python"},
  {path:'/web',component:web,name: "web"},
  {path:'/wx',component:wx,name: "wx"},
  {path:'/data',component:data,name: "data"},
  {path:'/data_global',component:data_global,name: "data_global"},
  {path:'/data_3d',component:data_3d,name: "data_3d"},
  {path:'/show',component:show,name: "show"},
  {path:'/seo',component:seo,name: "seo"},
  {path:'/1',component:helloworld,name: "helloworld"},
  {path:'*',redirect:"/"}
]