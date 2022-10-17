<template>
  <div id="grandson">
    <p>{{ msg }}</p>
    <p>通过$attrs传递的数据：{{this.$attrs.data}}</p>
    <button @click="grandsoncallfather">孙子触发爷爷组件的方法</button>
  </div>
</template>

<script>
export default {
  name: "grandson",
  //inject：在任何后代组件中接收想要添加在这个组件上的数据或方法，不管组件嵌套多深都可以直接拿来用
  inject: ["someData","someMethod"],
  data() {
    return {
      msg: "我是孙子组件:" + this.someData,
    };
  },
  created(){
    this.someMethod()
  },
  methods: {
    grandsoncallfather(){
        this.$emit('manyfn1')
    }
  },
  
};
</script>

<style lang="scss" scoped>
</style>
