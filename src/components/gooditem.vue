<template>
  <div id="gooditem">
    <div class="goods" @click="gotodetail">
      <p>{{ goodsitem.name }}</p>
      <p>{{ goodsitem.iid }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsitem: Object,
  },
  data() {
    return {};
  },

  methods: {
    gotodetail() {
      this.$router.push({
        name: "Detail",
        params: { iid: this.goodsitem.iid },
      });
    },
  },
};
</script>

<style>
.goods {
  background-color: aquamarine;
}
</style>