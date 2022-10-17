<template>
  <div>
    <el-avatar shape="square" :size="100" :src="url"></el-avatar>
    <br/>
    <button @click="test">修改子组件图片并且更新父组件图片</button>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
  },
  methods: {
    test() {
      this.$emit("update:photourl",'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png');
    },
  },
};
</script>

<style>
</style>