<template>
  <div class="nextTick">
    <ul ref="ulref">
      <li v-for="(item, index) in book" :key="index">{{ item }}</li>
    </ul>
    <button @click="addbook">添加</button>
  </div>
</template>

<script>
//this.$nextTick的作用是：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
//直接获取是获取不到最新的dom
//因为this.$nextTick会执行一个回调函数，在js中，分同步任务和异步任务，在事件循环里，异步任务分为宏任务和微任务，nextTick属于微任务
//微任务 -> dom渲染 -> 宏任务
//执行完后才会执行异步任务，而vue的dom渲染是异步的
export default {
  name: "nextTick",
  components: {},
  data() {
    return {
      book: ["asd", "fgh", "jkl"],
    };
  },
  methods: {
    addbook() {
      console.log(this.book.length);
      this.book = ["活着"];
      this.$nextTick(() => {
        let uldomlen = this.$refs.ulref.childNodes.length;
        console.log(uldomlen);
      });
    },
  },
};
</script>
