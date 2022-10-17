<template>
  <div id="son3">
    <!-- vue中v-model和：value (即：v-bind: value)
1、区别
v-mode实现了视图和data中数据的双向绑定，两者其一改变均改变
v-bind:value只是将初始化时data中的数据绑定到input上，修改input中的值并不会改变data中的数据。
2、v-model的本质
v-model其实时一个语法糖、背卮本质上是v-bind:value和v-on:input两个操作
父组件将值通过：value传给子组件、当值改变的时候，子组件通过＠input通知父组件值发生了改变，形成单向数据流 -->

    <input type="text" :value="data" @input="changedatafather" />


    <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  name: "son3",
  data() {
    return {};
  },
  props: {
    data: {
      type: [String, Number],
      default: "",
    },
  },
  model: {
    prop: "data",
    event: "changedata",
  },
  methods: {
    changedatafather(e) {
      console.log(e);
      this.$emit("changedata", e.target.value);
    },

    test(){
      this.$emit('test','123','456','789')
    }
  },
};
</script>

<style>
</style>