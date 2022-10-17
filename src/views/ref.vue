<template>
  <div class="ref">
    <refchild ref="child"></refchild>
    <button @click="getfn">获取子组件的方法</button>
    <button @click="getdata">获取子组件的data</button>
  </div>
</template>

<script>
//ref获取dom实例
import refchild from '../components/refchild'
export default {
  name: "ref",
  components: {refchild},
  data() {
    return {

    };
  },
  methods: {
    getfn(){
        this.$refs.child.childfn()
    },
    getdata(){
        console.log(this.$refs.child.msg);
    }
  },
};
</script>
