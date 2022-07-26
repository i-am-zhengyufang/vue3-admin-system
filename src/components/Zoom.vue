

  <template>
  <div class="zoom">
    <div
      class="preview_img"
      ref="preview_img"
      @mouseover="mouseover"
      @mouseout="mouseout"
      @mousemove="mousemove"
    >
      <img alt="" :src="src" />
      <div class="mask" :style="maskStyle" ref="mask" v-show="isShow"></div>
    </div>
    <div class="big" ref="big" v-show="isShow">
      <img :src="bigSrc" :style="bigImgStyle" ref="bigImg" />
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, toRefs } from "vue";

const isShow = ref(false);
const imgSize = 400;
const maskSize = 50;

const props = defineProps({
  src: String,
  bigSrc: String,
});

const { src, bigSrc } = toRefs(props);
console.log(props);
let obj = reactive({
  maskX: 0,
  maskY: 0,
  bigX: 0,
  bigY: 0,
});
let preview_img = ref(null);
let big = ref(null);
let bigImg = ref(null);
const mouseover = () => {
  isShow.value = true;
};

const mouseout = () => {
  isShow.value = false;
};

const maskStyle = computed(() => {
  return { left: obj.maskX + "px", top: obj.maskY + "px" };
});

const bigImgStyle = computed(() => {
  return { left: -obj.bigX + "px", top: -obj.bigY + "px" };
});

const mousemove = (e) => {
  let x = e.pageX - preview_img.value.offsetLeft;
  let y = e.pageY - preview_img.value.offsetTop;
  obj.maskX = x - maskSize / 2;
  obj.maskY = y - maskSize / 2;
  let maskMax = imgSize - maskSize;
  if (obj.maskX <= 0) {
    obj.maskX = 0;
  } else if (obj.maskX >= maskMax) {
    obj.maskX = maskMax;
  }
  if (obj.maskY <= 0) {
    obj.maskY = 0;
  } else if (obj.maskY >= maskMax) {
    obj.maskY = maskMax;
  }
  let bigMax = bigImg.value.offsetWidth - big.value.offsetWidth;
  obj.bigX = (obj.maskX * bigMax) / maskMax;
  obj.bigY = (obj.maskY * bigMax) / maskMax;
};
</script>
<style lang="scss">
.zoom {
  display: flex;
  justify-content: space-between;
  .preview_img {
    position: relative;
    height: 400px;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 50px;
      background: $app-bgc;
      opacity: 0.5;
      cursor: crosshair;
    }
  }
  .big {
    position: relative;
    width: 400px;
    height: 400px;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>