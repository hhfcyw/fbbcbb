<template>
  <div class="refchild">
    <h3>我是子组件</h3>
  </div>
</template>

<script>
export default {
  name: "refchild",
  components: {},
  data() {
    return {
        msg:'我是子组件的数据'
    };
  },
  methods: {
    childfn(){
        console.log('我是子组件的方法');
    }
  },
};
</script>
