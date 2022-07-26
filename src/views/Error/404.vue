<template>
  <section class="page_404">
    <div class="four_zero_four_bg">
      <h1>404 Not Found</h1>
    </div>

    <div class="contant_box_404">
      <h3>您好像来到了一个不存在的地方o(╥﹏╥)o</h3>

      <router-link to="/home" class="link_404">返回首页</router-link>
      <p>
        Copyright (c) 2022 by Naved khan
        <a class="native-link" href="https://codepen.io/Navedkhan012/pen/vrWQMY"
          >(https://codepen.io/Navedkhan012/pen/vrWQMY)</a
        >
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.page_404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: #fff;
  text-align: center;

  img {
    width: 100%;
  }
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  width: 50%;
  background-position: center;
  h1 {
    font-size: 40px;
  }
}
.contant_box_404 {
  .link_404 {
    color: #fff;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;
  }
  p {
    font-size: font-small-size;
    color: #8b8b8b;
    .native-link {
      color: #8ec5fc;
    }
  }
}
</style>