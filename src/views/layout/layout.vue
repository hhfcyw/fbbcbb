<template>
  <div class="layout">
    <el-tabs @tab-click="handleClick">
      <el-tab-pane :label="item" :name="item" v-for="(item,index) in title" :key="index"></el-tab-pane>
    </el-tabs>
    <contents></contents>
  </div>
</template>

<script>
import contents from '../content/content'
import router from '../../router/index'
export default {
  name: "Layout",
  data() {
    return {
        title:[]
    };
  },
  components: {
    contents
  },
  created(){
    let r = router.options.routes[0].children
    console.log(r)
    for(let i = 2;i<r.length;i++){
      this.title.push(r[i].path)
    }
    console.log(this.title)
  },
  methods: {
    handleClick(tab) {
         this.$router.push(tab.name)
      }

  },
};
</script>
