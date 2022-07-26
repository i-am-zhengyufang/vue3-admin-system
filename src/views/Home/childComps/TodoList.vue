<template>
  <span class="title">TODOList</span>
  <div class="todoapp">
    <el-dialog v-model="dialogFormVisible" title="写下你要做的事情叭">
      <!-- 我是傻逼一开始写成keydown.enter然后出现奇奇怪怪的错误，你看官网的例子 -->
      <el-input v-model.trim="text" @keyup.enter="handleaddTodo" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handlecancel">取消</el-button>
          <el-button type="primary" @click="handleaddTodo">确认</el-button>
        </span>
      </template>
    </el-dialog>

    <section class="main">
      <div class="todo-top">
        <div class="toggle-all-wrap">
          <input
            v-show="todos.length"
            id="toggle-all"
            type="checkbox"
            @click="toggleAll"
            v-model="allDone"
          />
          <label for="toggle-all">全选</label>
        </div>
        <el-button class="add-btn" @click="dialogFormVisible = true"
          >添加</el-button
        >
      </div>
      <!-- id和for绑定 -->
      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo">
          <div class="box-wrap" :class="{ completed: todo.completed }">
            <input type="checkbox" :id="todo.text" v-model="todo.completed" />
            <label :for="todo.text">{{ todo.text }}</label>
          </div>
          <el-button type="danger" plain @click="removeTodo(todo)" size="small"
            >删除</el-button
          >
        </li>
      </ul>
    </section>
    <el-button class="clear-completed" type="danger" @click="removeCompleted"
      >清除已经完成的</el-button
    >
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const dialogFormVisible = ref(false);
const text = ref("");
const todos = ref([
  {
    text: "吃饭",
    completed: true,
  },
  {
    text: "睡觉",
    completed: true,
  },
  {
    text: "玩手机",
    completed: true,
  },
  {
    text: "打代码",
    completed: false,
  },
]);
// 我一开始写的是todos=reactive([]),reactive得到的是proxy
// 因此通过todos=a等赋值操作都不能保证响应式，只能通过todos.push啊啥的，见62行
const allDone = computed(() => {
  return todos.value.every((item) => item.completed);
});
const handlecancel = () => {
  dialogFormVisible.value = false;
  text.value = "";
};
const handleaddTodo = () => {
  //   todos = [{ text: text.value, completed: false }, ...todos];这样子不是响应式的，见博客
  //   https://juejin.cn/post/7114596904926740493
  todos.value.unshift({ text: text.value, completed: false });
  handlecancel();
};
const removeTodo = (target) => {
  todos.value = todos.value.filter((item) => item !== target);
};
const removeCompleted = () => {
  todos.value = todos.value.filter((item) => !item.completed);
};
const toggleAll = () => {
  const isCheckAll = todos.value.some((item) => item.completed === false);
  todos.value.map((item) => (item.completed = isCheckAll));
};
</script>
<style lang="scss">
// emmm这里的样式写的很乱，为了达到修改checkbox效果
.todoapp {
  width: 90%;
  //   由于伪类缘故，不写100%
  .main {
    .todo-top {
      display: flex;
      justify-content: space-between;
      .toggle-all-wrap {
        margin: 10px 0;
        position: relative;
        padding: 10px;
        input[type="checkbox"] {
          position: absolute;
          opacity: 0;
        }
        label:before {
          content: "";
          position: absolute;
          left: -30px;
          top: 5px;
          width: 20px;
          height: 20px;
          border: 1px solid #ddd;
          border-radius: 50%;
          transition: all 0.3s ease;
          -webkit-transition: all 0.3s ease;
        }

        label:after {
          content: "";
          position: absolute;
          left: -22px;
          top: 8px;
          width: 6px;
          height: 12px;
          border: 0;
          border-right: 1px solid #fff;
          border-bottom: 1px solid #fff;
          background: #fff;
          transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          transition: all 0.3s ease;
          -webkit-transition: all 0.3s ease;
        }
        input[type="checkbox"]:checked + label:before {
          background: $check-color;
          border-color: $check-color;
        }
        input[type="checkbox"]:checked + label:after {
          background: $check-color;
        }
      }
    }
    .todo-list {
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
        &:hover {
          background-color: $fill-bgc;
        }
        .box-wrap {
          position: relative;
          padding: 10px;
          &.completed {
            text-decoration: line-through;
            color: $font-gray;
          }
          input[type="checkbox"] {
            position: absolute;
            opacity: 0;
          }
          label:before {
            content: "";
            position: absolute;
            left: -30px;
            top: 5px;
            width: 20px;
            height: 20px;
            border: 1px solid #ddd;
            border-radius: 50%;
            transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
          }

          label:after {
            content: "";
            position: absolute;
            left: -22px;
            top: 8px;
            width: 6px;
            height: 12px;
            border: 0;
            border-right: 1px solid #fff;
            border-bottom: 1px solid #fff;
            background: #fff;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
          }
          input[type="checkbox"]:checked + label:before {
            background: $check-color;
            border-color: $check-color;
          }
          input[type="checkbox"]:checked + label:after {
            background: $check-color;
          }
        }
      }
    }
  }
  .clear-completed {
    margin-top: 10px;
  }
}
</style>

