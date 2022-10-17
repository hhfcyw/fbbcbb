<template>
  <div id="watchchild">
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
  </div>
</template>

<script>
export default {
  name: "watchchild",
  props: {
    fusername: {
      type: String,
    },
    fpassword: {
      type: String,
    },
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  watch: {
    // Demo4：监听 props 组件传过来的值
    fusername: {
      handler(newval, oldval) {
        this.username = newval;
        console.log(newval);
        console.log(oldval);
      },
      immediate:true,
    },
    fpassword: {
      handler(newval, oldval) {
        this.password = newval;
        console.log(newval);
        console.log(oldval);
      },
      immediate:true,
    },
  },
};
</script>

<style>
</style>