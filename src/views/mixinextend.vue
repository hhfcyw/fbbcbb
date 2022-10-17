<template>
  <div id="me">
    <p v-show="show">我在这</p>
    <p v-for="(item, index) in reversearr()" :key="index">{{ item }}</p>
  </div>
</template>

<script>
// extend用于创建vue实例
// mixins可以混入多个mixin，extends只能继承一个
// mixins类似于面向切面的编程（AOP），extends类似于面向对象的编程
// 优先级Vue.extend>extends>mixins
import { mixindemo1, mixindemo2 } from "../mixinextend/mixin";
import { extenddemo } from "../mixinextend/extend";
export default {
  // extend：扩展组件的构造器，当我们调用vue.component('a', {...})时自动调用
  // mixins：接收对象数组（可理解为多继承），可以混入多个mixin，
  // extends：接收的是对象或函数（可理解为单继承），extends只能继承一个
  extends: extenddemo,
  mixins: [mixindemo1, mixindemo2],
  name: "me",
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    reversearr() {
      //  在方法里面重新赋值一个变量，然后去判断条件
      // 最后就不会报错无限更新循环渲染组件函数
      // 注意使用计算属性的时候，千万不要去改变data里面的属性，否则会报错
      return this.arr.slice().reverse(); //加入slice是为了不改变原数据
    },
  },
};
</script>

<style>
</style>





