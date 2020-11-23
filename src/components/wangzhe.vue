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
    </div>
</div>
</template>

<script>
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



    this.drawecharts();
  },
  components: {
    
  }
};
</script>
