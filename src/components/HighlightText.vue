
<script>
import { h, toRefs, watch } from "vue";
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    highlightText: {
      type: String,
    },
  },
  setup(props) {
    const { text, highlightText } = toRefs(props);
    let reg;
    watch(highlightText, () => {
      reg = new RegExp(highlightText.value);
    });
    return () => {
      if (highlightText.value)
        return h("span", {
          innerHTML: text.value.replace(
            reg,
            `<span class='high-light-text'>${highlightText.value}</span>`
          ),
        });
      else return `${text.value}`;
    };
  },
};
</script>

<style lang="scss">
// 使用render，不能加scoped，要不然样式无效
.high-light-text {
  color: $high-light-text;
}
</style>