<template>
  <div id="uncle">
    <p>{{title}}</p>
  </div>
</template>

<script>
import bus from "../utils/eventBus"
export default {
  name: "father",
  data() {
    return {
        title:''
    };
  },
  created(){
    bus.$on('sharedata',e => {
        this.title = e
    })
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
</style>
