<template>
  <div id="son">
    <p>{{ msg }}</p>
    <p>{{ son.name }} {{ son.age }} {{ son.heigth }} {{ son.girl }}</p>
    <button @click="revise">修改父组件传递给子组件的值</button>
    <button @click="callfatherfn()">调用父组件的自定义事件并且传递数据</button>
    <button @click="sonupdatefatherheigth()">子组件直接修改父组件的data</button>

    <Grandson v-bind="$attrs" v-on="$listeners"></Grandson>
  </div>
</template>

<script>
import Grandson from "./grandson.vue";
export default {
  name: "father",
  components: { Grandson },
  inheritAttrs: true,
  data() {
    return {
      msg: "我是子组件",
      fatherheigth: "170",
      girl: "xiaohua",
    };
  },
  props: {
    son: {
      type: Object,
    },
  },
  created() {
    console.log(this.$attrs);
  },
  methods: {
    // .sync
    revise() {
      this.$emit("update:son", { name: "sanerzi", age: "14", heigth: "176" });
    },

    // 子组件可以使用 $emit 触发父组件的自定义事件。其实它的作用就是触发自定义函数。此外,可以子组件传参数给父组件综述,即子组件调用父组件的方法并传递数据
    callfatherfn() {
      this.$emit("updatesonnature", this.girl);
    },

    // this.$parent.List = []; 表示访问到父组件（最近的一层）中data的数据list数组
    // this.$root.List = []; 表示访问到根组件（多层嵌套的话的最远的那一层父组件）
    sonupdatefatherheigth() {
      this.$parent.obj.father.heigth = "190";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
