<template>
  <div>
    <p>父组件</p>
    <el-avatar shape="square" :size="100" :src="url"></el-avatar>
    <p>子组件</p>
    <smallphoto :photourl.sync="url" :url="url"></smallphoto>
  </div>
</template>

<script>
import smallphoto from "../components/smallphoto";
export default {
  components: {
    smallphoto,
  },
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
};
</script>

<style>
</style>