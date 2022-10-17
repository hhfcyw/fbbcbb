<template>
  <div id="goods">
    <goodlist :goods="goodslist"></goodlist>
  </div>
</template>

<script>
import goodlist from '../components/goodlist'
export default {
  name: "goods",
  components:{goodlist},
  data() {
    return {
      goodslist: [
        { name: "huawei", iid: "111" },
        { name: "xiaomi", iid: "222" },
        { name: "iphone", iid: "333" },
      ],
    };
  },
};
</script>

<style>
</style>