<template>

<div class="wangzhe">
    <div id="header">
      <div class="header_inner">
        <a class="action left animate__animated animate__fadeInRight">深圳机场战队</a>
        <div class="middle" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000" aos-duration="2000" data-aos-delay="1000">
          <a class="middle_child"></a>
        </div>
      </div> 
    </div>

    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <!-- <h3>深圳机场战队</h3> -->
            <p class="animate__animated animate__fadeInDown">战队要改名，有的发群里</p>
            <p class="animate__animated animate__fadeInDown">Q群：1037925330</p>
            <p class="animate__animated animate__fadeInDown">战队赛连胜送皮肤/零食/爱情动作片</p>
            <h3 class="img_text">国色天香</h3>
            <p class="small">群里投票选出颜值最高的：给领队+群管理</p>
            <p class="small">（参加发相片和ID，不接受闪照）</p>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../static/wangzhe/11.jpg"><p class="swiper-p">←左 (滑动解锁) 右→</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/1.jpg"><p class="swiper-p">小蹦比（18cm）</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/16.jpg"><p class="swiper-p">巧克力将将，红包是几千几千的发啊</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/2.jpg"><p class="swiper-p">墨兮~</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/3.jpg"><p class="swiper-p">叫我姐姐wink</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/17.jpg"><p class="swiper-p">从前那个我呢</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/4.jpg"><p class="swiper-p">打kiss吗</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/5.jpg"><p class="swiper-p">低调队长在线卑微</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/6.jpg"><p class="swiper-p">忘了叫啥了</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/7.jpg"><p class="swiper-p">玉奇奇</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/8.jpg"><p class="swiper-p">与世逝（荣耀王者）</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/9.jpg"><p class="swiper-p">萱萱时刻在</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/10.jpg"><p class="swiper-p">不知名</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/18.jpg"><p class="swiper-p">坏阿姨</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/12.jpg"><p class="swiper-p">百味汽水ﾉ♪</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/13.jpg"><p class="swiper-p">闷骚的小鲁班</p></div>
                    <div class="swiper-slide"><img src="../../static/wangzhe/14.jpg"><p class="swiper-p">九九不会飘(长期红包第一)</p></div>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <!-- <p>数据不完全对，有疑问找队长修改</p> -->
            <div id="circleChart" style="height: 600px;"></div>
        </div>
        <div class="swiper-slide">
            <!-- <h3 class="animate__animated animate__bounce">逐步完善</h3>
            <p class="animate__animated animate__bounce"></p> -->
            <el-table
            :data="tableData"
            class="table_wangzhe"
            style="width: 100%">
            <el-table-column
                prop="name"
                width="120px"
                label="王者名">
            </el-table-column>
            <!-- <el-table-column
                prop="address"
                label="说明">
            </el-table-column> -->
            <el-table-column
                prop="five"
                align="center"
                label="五胜">
            </el-table-column>
            <el-table-column
                prop="six"
                align="center"
                label="六胜">
            </el-table-column>
            <el-table-column
                prop="date"
                align="center"
                label="红包第一">
            </el-table-column>
            </el-table>

        </div>
        <!-- <div class="swiper-slide">
            <h3 class="animate__animated animate__bounce">战队规则</h3>
            <p>★年底贡献最高（根据战队赛，红包数）送周年限定，多带带小胸弟</p>
            <p>★战队赛6胜：零食/20红包+副队+群管理（累计三次送活动皮肤任选，可以过百,需都是战队成员）</p>
            <p>★战队赛5胜：辣条/薯片/鱼仔+领队</p>
            <p>★战队发红包：第一副队，前三给精英</p>
            <p>★活跃不够2000/骂人～踢</p>
            <p>★活跃3000，免费送电影（会员收费/爱情动作片/海外禁播）都行</p>
            <p>★每周投票一次颜值最高，给领队+群管理</p>
            <p>不要没事搞事情，要怼就怼群主，在线卑微</p>

        </div>
 -->
    </div>
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
import { Swiper, swiperSlide } from 'vue-awesome-swiper'
import echarts from "echarts";
export default {
  name: "datad",
  data() {
    return {
        tableData: [{
            date: '没有',
            name: '小蹦比',
            address: '没啥好说的，上分找主播',
            five:'♥',
            six:'.',
          }, {
            date: '4X🧧',
            name: '九九不会飘',
            address: '没啥好说的，就这样',
            five:'.',
            six:'.',
          }, {
            date: '2X🧧',
            name: '性感伽罗扎针',
            address: '有事说话，如果踢错了，或者其他的啥的',
            five:'♥',
            six:'.',
          }, {
            date: '🧧',
            name: '龘志',
            address: '没啥好说的，就这样',
            five:'♥',
            six:'.',
          }, {
            date: '.',
            name: '状态选手',
            address: '带妹狂魔',
            five:'.',
            six:'.',
          }, {
            date: '.',
            name: '不配拥有爱',
            address: '',
            five:'♥',
            six:'.',
          }, {
            date: '4X🧧',
            name: '别捏瑶瑶的脸',
            address: '大佬',
            five:'♥♥',
            six:'♥',
          }, {
            date: '.',
            name: '雨桐',
            address: '执法队长',
            five:'♥',
            six:'.',
          }, {
            date: '2X🧧',
            name: '巧克力将将',
            address: '这个女孩不太凶',
            five:'.',
            six:'.',
          }, {
            date: '.',
            name: '一菜巨菜',
            address: '',
            five:'♥',
            six:'.',
          }]
    };
  },
  methods: {
    drawecharts() {
      var mychart = echarts.init(document.getElementById("circleChart"));
      var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: {
      top:"5%",
      left:'5%',
      text: "深圳机场战队内部数据分析系统",
      textStyle:{
          align:"center",
          textBorderColor:'#e11313',
          },
    },
    legend: {
        data: ['段位★级', '战队赛贡献', '颜值指数', '带队指数', '群活跃指数'],
        top:70
    },
    grid: {
        left: '3%',
        right: '4%',
        top:130,
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        axisLabel: {
                                           interval:0,
                                           rotate:320
                                        },
        data: ['小蹦比', '九九不会飘', '龘志', '性感伽罗扎针','别捏瑶瑶的脸','状态选手','自救','一菜巨菜','巧克力将将'],
    },
    series: [
        {
            name: '段位★级',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [83, 81, 91, 90, 86,100,100,86,86]
        },{
            name: '战队赛贡献',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [79, 73, 86, 81,48,0,9,67,47]
        },{
            name: '战队红包',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [23, 99, 69, 77,86,13,9,56,95]
        },
        {
            name: '颜值指数',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [66, 88,90, 60,92,50,50,50,80]
        },{
            name: '带队指数',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [86, 85, 22, 22,22,66,27,55,37]
        },{
            name: '群活跃指数',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [30, 96, 96, 86,34,46, 43,80,82]
        }
    ]
      };
    mychart.setOption(option);
    }
    
  },
  mounted() {
    document.title = "❤深圳机场战队内部数据分析系统"
    var swiper = new Swiper('.wangzhe',{
      // pagination: {
      //       el: '.swiper-pagination',
      //       dynamicBullets: true,
      //   },
      direction: 'vertical',
      // mousewheel: true,

})


    this.drawecharts();

  　var myswiper = new Swiper(".swiper-container", {
      effect : 'cube',
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 100,
        shadowScale: 0.6
      },
      loop : true,
　　});

  },
  components: {
    Swiper,swiperSlide
  }
};
</script>
<style scoped lang = 'stylus'>
.wangzhe 
    width 100vw
    height  100vh
    background-color #ffffff
    background-image url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2380F'/%3E%3Cstop offset='1' stop-color='%23f40'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E")
    background-attachment fixed
    background-size cover
    .small
      height 1rem
      line-height 1rem
      font-size 1rem
    .img_text
        line-height 2rem
        font-size 1.5rem
        padding-top 3rem
    h3 
        color #fff
        font-size 1rem
        line-height 2rem
        height 2rem
    p 
        color #ccc
        line-height 1rem
        padding 0 1rem
        font-size 0.8rem
    .swiper-container
        max-width: 400px;
        width: auto;
        padding 4rem 0 40px;
        overflow hidden;
        transform translate(0,-50px)
        .swiper-slide 
            img
                max-height: 400px;
                width: 100%;
                overflow hidden;
        .swiper-p
            font-size .9rem!important
            text-align center
    .table_wangzhe
        margin-top 2rem
</style>
