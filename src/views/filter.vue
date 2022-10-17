<template>
  <div id="filterdemo">
    <ul>
      <!--添加两个过滤器,注意不要冲突,注意先后顺序-->
      <li v-for="(item, index) in list" :key="index">
        {{ item.id | filterAdd1 | filterAdd2 }}
      </li>
    </ul>
    <p>---------------------------------</p>
    <button @click="add">加载更多</button>
    <ul>
        <!-- 计算属性筛选 -->
      <li v-for="(item, index) in filterlist1" :key="index">
        {{ item }}
      </li>
    </ul>
    <p>---------------------------------</p>
    <ul>
        <!-- methods方法筛选 -->
      <li v-for="(item, index) in filterlistfun()" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "filterdemo",
  data() {
    return {
      list: [
        { id: 0, title: "11111", cont: "111111" },
        { id: 1, title: "22222", cont: "111111" },
        { id: 2, title: "33333", cont: "111111" },
        { id: 3, title: "44444", cont: "111111" },
      ],
      size: 5,
      list1: [
        { id: 0, title: "11111", cont: "111111" },
        { id: 1, title: "22222", cont: "111111" },
        { id: 2, title: "33333", cont: "111111" },
        { id: 3, title: "44444", cont: "111111" },
        { id: 4, title: "55555", cont: "55555" },
        { id: 5, title: "66666", cont: "66666" },
        { id: 6, title: "77777", cont: "77777" },
        { id: 7, title: "77777", cont: "88888" },
        { id: 8, title: "888888", cont: "999999" },
        { id: 9, title: "000000", cont: "99999" },
        { id: 10, title: "a88888", cont: "99999" },
      ],
    };
  },

  //全局过滤器
  // Vue.filter('filterAdd2', function (value) {
  //     return '$'+value;
  // })

  //局部过滤器
  filters: {
    filterAdd1(item) {
      return item + 10;
    },
    filterAdd2(item) {
      return "$" + item;
    },
  },
  computed: {
    filterlist1() {
      let num = this.size;
      return this.list1.filter((item) => {
        return item.id <= num;
      });
    },
  },
  methods: {
    filterlistfun() {
      let num = this.size;
      return this.list1.filter((item) => {
        return item.id <= num;
      });
    },
    add() {
      this.size += 5;
    },
  },
};
</script>

<style>
</style>