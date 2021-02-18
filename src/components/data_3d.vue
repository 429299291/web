<template>
  <div class="data_3d">
    <div id="circleChart" style="height: 100%;"></div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  name: "data_global",
  data() {
    return {
      msg: "data_3d"
    };
  },
  methods: {
    drawecharts() {
      let myChart = echarts.init(document.getElementById("circleChart"));
      let option
      this.$axios.get('https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/life-expectancy-table.json')
        .then(data => {
    var symbolSize = 2.5;
    option = {
        grid3D: {},
        xAxis3D: {
            type: 'category'
        },
        yAxis3D: {},
        zAxis3D: {},
        dataset: {
            dimensions: [
                'Income',
                'Life Expectancy',
                'Population',
                'Country',
                {name: 'Year', type: 'ordinal'}
            ],
            source: data.data
        },
        color:['#5470c6'],
        series: [
            {
                type: 'scatter3D',
                symbolSize: symbolSize,
                encode: {
                    x: 'Country',
                    y: 'Life Expectancy',
                    z: 'Income',
                    tooltip: [0, 1, 2, 3, 4]
                }
            }
        ]
    };

    myChart.setOption(option);
        })

option && myChart.setOption(option);
    }
  },
  mounted() {
    this.drawecharts();
    document.title = "大数据可视化❤"
  }
};
</script>
<style scoped>
.data_3d {
  height: 100vh;
}
</style>
