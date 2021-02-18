<template>
<div class="data_id">
  <div id="circleChart" style="height: 100vh;"></div>
</div>
</template>
<script>
export default {
  name: 'v_header',
  data () {
    return {
	    msg: 'header',
    }
  },
  methods: {
    drawecharts(){
      let myChart = echarts.init(document.getElementById("circleChart"));
      let option

var series = [];
for (var i = 0; i < 10; i++) {
    series.push({
        type: 'bar3D',
        data: this.generateData(),
        stack: 'stack',
        shading: 'lambert',
        emphasis: {
            label: {
                show: false
            }
        }
    });
}

myChart.setOption({
    xAxis3D: {
        type: 'value'
    },
    yAxis3D: {
        type: 'value'
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        viewControl: {
            // autoRotate: true
        },
        light: {
            main: {
                shadow: true,
                quality: 'ultra',
                intensity: 1.5
            }
        }
    },
    series: series
});

option && myChart.setOption(option);
    },
    generateData() {
        var data = [];
        var noise = new SimplexNoise(Math.random);
        for (var i = 0; i <= 10; i++) {
            for (var j = 0; j <= 10; j++) {
                var value = noise.noise2D(i / 5, j / 5);
                data.push([i, j, value * 2 + 4]);
            }
        }
        return data;
    }
  },
components: {
},
mounted () {
  this.drawecharts();
}}
</script>
<style scoped>
</style>
