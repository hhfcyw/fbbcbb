<template>
  <div id="detail">
    <p>{{ iid }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iid: null,
    };
  },
  watch: {
    // $route(to, from) {
    //   console.log(to);
    //   console.log(from);
    // },
  },
  created() {
    this.iid = this.$route.params.iid;
    console.log(this.iid);
    console.log(this.$route.params.iid, "zheli");
  },
};
</script>

<style>
</style>