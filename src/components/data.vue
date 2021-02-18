<template>
  <div class="data">
    <div class="top"></div>
    <div id="circleChart" style="height: 100%;"></div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  name: "datad",
  data() {
    return {
    };
  },
  methods: {
    drawecharts() {
      var mychart = echarts.init(document.getElementById("circleChart"));
      setTimeout(function () {
      var option = {
        legend: {
          top:'7%',
        },
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
                ['终端办理', 564, 546, 134, 656, 283, 656, 546,254,512,852,513,652,154,424,525,641,531,527,514,541,521,524,315,324,152,475,205,147,527,624],
                ['人工办理', 264, 514, 155, 345, 122, 161, 554,525,350,545,341,455,135,542,412,524,432,412,312,424,351,252,370,381,305,242,102,30,253,410],                
            ]
        },
        color: [
          "#c23531",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3"
        ],
        title: {
          top:"5%",
          left:'5%',
          text: "深圳市公安局南山分局出入境大厅综合分析(虚拟data)",
          textStyle:{
              align:"center",
              textBorderColor:'#e11313',
              },
        },
        grid:{
            top:"15%"
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },        
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '32%'],
                label: {
                    formatter: '{b}: {@1} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '1',
                    tooltip: '1'
                }
            }
        ],
        toolbox: {
          show: true,
          top:100,
          right:'10%',
          feature: {
            // dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },



      };
    mychart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            mychart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    },
                },
            });
        }
    });

    mychart.setOption(option);


});
    }
    
  },
  mounted() {
    this.drawecharts();
    document.title = "大数据可视化❤"
  },
  components: {
    // Vheader
  }
};
</script>
<style scoped>
.data {
  background: -webkit-radial-gradient(circle, #819bb4, #5674b6);
  height: 100vh;
}
p {
  font-size: 40px;
  color: #333;
  padding-top: 40px;
}
</style>
