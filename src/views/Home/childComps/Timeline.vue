<template>
  <span class="title">腾讯发展史</span>
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
      :color="activity.color"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
const activities = [
  {
    content:
      "腾讯总市值30375亿港元，超越阿里巴巴的3878.27亿美元(约30325.7亿港元)，成中国市值最大的上市公司，在全球市值排名中位列第8位",
    timestamp: "2017-08-07",
    color: "#eebe77",
  },
  {
    content:
      "宣布成立微信事业群(WXG)撤销2012年组建的腾讯电商控股公司，其中的O2O业务并入微信事业群",
    timestamp: "2014-05-07",
  },
  {
    content:
      "腾讯控股在香港联合交易所主板正式挂牌，股份代号700.是第一家在香港主板上市的中国互联网企业。跨讯公司在香港联交所主板公开上市(股票代号00700)",
    timestamp: "2004-06-16",
  },
  {
    content:
      "在北京嘉里中心隆重宣布推出企业级实时通信产品“腾讯通”(RTX)，标志着腾讯公司进军企业市场，作为中国第—家企业实时通信服务商",
    timestamp: "2003-09-09",
  },
  {
    content:
      "2NetValue宣布了亚洲五个国家和地区的互联网网站及实体的排名，包括中国香港特区、韩国、新加坡、中国台湾地区和中国大陆的数据，腾讯网在中国排名第6",
    timestamp: "2001-01-31",
  },
  {
    content:
      "马化腾和同学张志东在广东省深圳市正式注册'深圳市腾讯计算机系统有限公司''",
    timestamp: "1998-11-11",
  },
];
</script>

<style>
</style>