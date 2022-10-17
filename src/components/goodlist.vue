<template>
  <div id="goodlist">
    <gooditem v-for="(item,index) in goods" :key="index" :goodsitem="item"></gooditem>
  </div>
</template>

<script>
import gooditem from '../components/gooditem'
export default {
  props: {
    goods: Array,
  },
  components:{gooditem},
  data() {
    return {};
  },
};
</script>

<style>
</style>