<template>
  <div class="web">
  <el-timeline  data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>      

<div class="data-show">
<p class="main-inner-p"  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">参与项目研发部分show</p>
  <el-carousel :interval="4000" type="card" height="29rem" class="main-inner-item">
    <el-carousel-item v-for="item in items" :key="item">
      <!-- <h3>{{ item }}</h3> -->
      <img :src="item" alt="UI设计朱东东">
    </el-carousel-item>
  </el-carousel>    
  </div>

    <el-image
      :src="url"
      class="louyu"
      fit="fill"></el-image>
    <div id="circleChart"></div>
</div>
</template>

<script>
import echarts from "echarts";
export default {
  name: 'ImgPreview',
  data () {
    return {
      msg: 'web',
      url:'https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/web/data6.jpg',
      items:[
          "https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/web/data5.jpg",
          "https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/web/data1.jpg",
          "https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/web/data2.jpg",
          "https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/web/data3.jpg",
          "https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/web/data4.jpg",
          'https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/web/data7.jpg',
          "https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/web/data8.png",
          "https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/web/data9.png",
          "https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/web/data10.png",
      ],
      year:2020,
        activities: [{
          content: '产品',
          timestamp: '市场分析，产品定位，用户行为，需求分析，思维脑图，业务流程图，产品原型',
          size: 'large',
          type: 'warning',
          icon: 'el-icon-s-promotion'
        }, {
          content: '设计',
          type: 'success',
          timestamp: '平面设计，UI设计，交互设计，动画设计',
          icon:'el-icon-s-open',
          size: 'large',
          color: '#0bbd87'
        }, {
          content: 'SEO',
          type: 'success ',
          timestamp: 'google、百度、搜狗等搜索引擎优化',
          size: 'large',
          icon:'el-icon-s-help'
        }, {
          content: '开发',
          type: 'success',
          size: 'large',
          icon:'el-icon-s-platform',
          timestamp: 'H5，移动端，小程序，大数据'
        }, {
          content: '3D',
          type: 'warning',
          size: 'large',
          icon:'el-icon-s-operation',
          timestamp: '3D展示效果，3D智慧楼宇、交通、城市，物联网3D联动，规模系统3D大数据'
        },{
          content: '机器学习，人工智能，网络爬虫',
          type: 'info ',
          size: 'large',
          icon:'el-icon-s-flag',
          timestamp: '人丑多读书总是没错的...'          
        }]      
      }
  },
  methods: {
    drawecharts() {
      this.drawCircles = echarts.init(document.getElementById("circleChart"));
      this.drawCircles.setOption({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    title:{
        text:"自身主要技术参考值(请多包涵)",
        left:"30%",
        top:"3%",
        textStyle:{
            align:"center",
            textBorderColor:'#e11313',
            },    
    },    
    // toolbox: {
    //     feature: {
    //         dataView: {show: true, readOnly: false},
    //         magicType: {show: true, type: ['line', 'bar']},
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
    legend: {
        // data:['HTML5','设计','交互','开发','SEO']
    },
    xAxis: [
        {
            type: 'category',
            axisLine:{
                lineStyle:{
                    width:2
                }
            },     
            axisLabel:{
                interval:0  //横轴各个技术点的最小间隔
            },       
            data: ['HTML5','css3','JavaScript','VUE','echarts','Photoshop','SEO','小程序','大数据','git','Flash都忘了','After Effects','canvas','VUEX','axios','webpack','Element','node.js','Python','swiper','ES6','websocket','NPM','Axure','three.js','stylus/sass'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '技术熟练度',
            min: 0,
            max: null,
            interval: 20,
            axisLine:{
                lineStyle:{
                    width:2
                }
            },
            axisLabel: {
                formatter: '{value} %',
            }
        },
        {
            type: 'value',
            name: '运用时间',
            min: 0,
            max: 9,
            interval: 1,
            axisLabel: {
                formatter: '{value}年'
            }
        }
    ],
    series: [
        {
            name:'技术熟练度',
            type:'bar',
            barMaxWidth:13,
            data:[95,95,91,87,86, 88,86, 86,89,77, 59,53,40,88,86,96,89,45,13,82,85,76,79,79,46,86]
        },
        {
            name:'项目熟练度',
            type:'bar',
            barMaxWidth:13,
            data:[93,98,86,92, 91,96, 68, 62,88,89, 39, 35,45,82,88,86,91,33,9,77,69,82,88,82,36,88]
        },
        {
            name:'使用年限',
            type:'line',
            yAxisIndex: 1,
            data:[this.$store.getters.html, this.$store.getters.css3, this.year-2013.5,this.year-2015,this.year-2016,this.year-2012,this.year-2014,this.year-2017,this.year-2016,this.year-2015,this.year-2013,this.year-2014.5,this.year-2015,this.year-2016,this.year-2015,this.year-2015,this.year-2014,this.year-2017,this.year-2019,this.year-2016.5,this.year-2016,this.year-2017,this.year-2016.5,this.year-2012,this.year-2015,this.year-2017]
        }
    ],
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 20,
                color: '#7f897e'
            }, {
                gt: 20,
                lte: 40,
                color: '#25e8e8'
            }, {
                gt: 40,
                lte: 60,
                color: '#1ced8b'
            }, {
                gt: 60,
                lte: 80,
                color: '#166df9'
            }, {
                gt: 80,
                lte: 90,
                color: '#f98111'
            }, {
                gt: 90,
                lte: 100,
                color: '#DE0707'
            },],
            outOfRange: {
                color: '#999'
            }
        }    
    
    });
    }
  },
  mounted() {
    this.drawecharts();
    if (document.documentElement.clientWidth<1000){
        this.$message({
          showClose: true,
          message: '电脑看起来更好！',
          type: 'warning',
        });
}  
  },
  created(){
      document.title = "前端开发❤"
      // this.year = parseFloat(((new Date()).getFullYear() + (new Date().getMonth() + 1)/10).toFixed(1))
      this.year = 2019.5
  }
  }
</script>
<style scoped>
@media screen and (max-width: 801px) {
.el-carousel{margin: 1.5rem 0 0rem!important}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 

.el-timeline{padding-top: 2rem;padding-left: 10%;}
#circleChart{height: 100vh;}
.main-inner-item{height: 100%;}
.data-show{height: 100%;width: 100%;overflow: hidden;}
.el-carousel--horizontal{overflow: inherit}
#app .main-inner-p{text-align: center;padding: -1rem 0 3rem}
.el-carousel{margin: 1rem 0 3rem}
.el-carousel__item  img{width: 100%}
.louyu{padding: 5rem 0;}
</style>
