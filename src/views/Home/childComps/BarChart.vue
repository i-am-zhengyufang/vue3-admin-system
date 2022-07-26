<template>
  <span class="title">授权数</span>
  <div class="chart">
    <base-chart :option="option" />
  </div>
</template>

<script setup>
import BaseChart from "@/components/BaseChart.vue";

let option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ["product", "2015", "2016", "2017"],
      ["Matcha Latte", 43.3, 85.8, 93.7],
      ["Milk Tea", 83.1, 73.4, 55.1],
      ["Cheese Cocoa", 86.4, 65.2, 82.5],
      ["Walnut Brownie", 72.4, 53.9, 39.1],
    ],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: { type: "category" },
  yAxis: {},
  series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
};
</script>

<style>
.chart {
  width: 400px;
  height: 200px;
}
</style>