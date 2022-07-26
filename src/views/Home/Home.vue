<template>
  <div class="home-container">
    <div class="card sayings">
      生活坏到一定程度就会好起来，因为它无法更坏。努力过后，就知道许多事情，坚持坚持，就过来了。
    </div>
    <div class="one-row row">
      <div class="card">
        <!-- 之所以看起来累赘加card的原因是给el-col加就无法保证他们之间有间距 -->
        <line-chart />
      </div>
      <div class="card">
        <bar-chart />
      </div>
    </div>
    <div class="two-row row">
      <div class="card col-one">
        <time-line />
      </div>
      <div class="col-two">
        <div class="card">
          <todo-list />
        </div>
        <div class="card">
          <technology-stack />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import BarChart from "./childComps/BarChart.vue";
import LineChart from "./childComps/LineChart.vue";
import TimeLine from "./childComps/Timeline.vue";
import TodoList from "./childComps/TodoList.vue";
import TechnologyStack from "./childComps/TechnologyStack.vue";
</script>



<style lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  .sayings {
    color: $font-gray;
    font-size: $font-small-size;
    text-align: center;
  }
  .row {
    display: flex;
    justify-content: space-between;
    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 20px;
    }
    &.one-row {
      .card {
        width: 48%;
      }
    }
    &.two-row {
      .col-one {
        flex: 1;
        margin-right: 20px;
      }
      .col-two {
        flex: 2;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>