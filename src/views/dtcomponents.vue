<template>
  <div id="dtcomponents">
    <p>动态组件</p>
    <!-- is属性判断加载那个组件 -->
    <component :is="com"></component>
    <button @click="switchcom">切换组件</button>

    <p>异步组件</p>
    <button @click="promisecom">异步加载组件</button>
    <div v-if="istrue">
        <AsyncComponent></AsyncComponent>
    </div>
  </div>
</template>

<script>
import father from './father'
import grandson from "../components/grandson";
import loading from '../components/loading'
import err from '../components/err'

const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('../components/tool'),
  // 异步组件加载时使用的组件
  loading: loading,
  // 加载失败时使用的组件
  error: err,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 10000,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 300
})
export default {
  name: "dtcomponents",
  components:{father,grandson,AsyncComponent},
  data() {
    return {
      com: "father",
      istrue:false
    };
  },
  methods: {
    switchcom(){
        this.com = 'grandson'
    },
    promisecom(){
        this.istrue = true
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
