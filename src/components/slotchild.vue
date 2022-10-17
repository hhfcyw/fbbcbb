<template>
  <div class="slot">
    <h3>我是子组件</h3>
    <!-- 默认插槽 -->
    <!-- <slot>这是子组件的slot的默认值</slot>
    <slot>这是子组件的slot的默认值</slot>
    <slot>这是子组件的slot的默认值</slot> -->

    <!-- 具名插槽 -->
    <!-- <slot name="s_1"></slot>
    <slot name="s_2"></slot>
    <slot name="s_3"></slot> -->

    <!-- 作用域插槽 在子组件绑定子组件上数据赋值自定义变量名上-->
    <!-- <slot :objdata="obj">{{obj.name}}</slot> -->

    <div v-for="(item, index) in arrdata" :key="index">
      <slot :arrprop="item"></slot>
      <button @click="look(item)">xiangqing</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "refchild",
  props: {
    arrdata: Array,
  },
  data() {
    return {
      msg: "我是子组件的数据",
      obj: {
        name: "xiaobai",
        age: 18,
        girl: {
          name: "xiaohua",
          age: 18,
        },
      },
    };
  },
  methods: {
    look(item){
      console.log(item)
    }
  },
};
</script>
