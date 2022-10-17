<template>
  <div id="computedwatch">
    <p>computed计算值：</p>
    {{ full }} {{ full }} {{ full }} {{ full }}
    <!-- <p>-------------------------------</p>
    <p>methods计算值：</p>
    {{ fullfn() }} {{ fullfn() }} {{ fullfn() }} {{ fullfn() }} -->
    <p>-------------------------------</p>
    <p>wacth</p>
    <input v-model="first" type="text" />
    <p>-------------------------------</p>
    <button @click="revisegirlboyname">
      修改data.girl.boy.name值(监测对象)
    </button>
    <button @click="revisegirlboyage">
      修改data.girl.boy.age的值(监测对象的单个对象)
    </button>
    <p>-------------------------------</p>
    <button @click="revisechild">修改传递给子组件的数据</button>
    <watchchild :fusername="username" :fpassword="password"></watchchild>
  </div>
</template>

<script>
import watchchild from "../components/watchchild.vue";
export default {
  name: "computedwatch",
  data() {
    return {
      first: "美女",
      second: "姐姐",
      girl: {
        name: "xiaohua",
        age: 18,
        boy: {
          name: "xiaobai",
          age: 18,
        },
      },
      username: "",
      password: "",
    };
  },
  components: {
    watchchild,
  },
  // computed 监控的数据在 data 中没有声明
  // computed 不支持异步，当 computed 中有异步操作时，无法监听数据的变化
  // computed 具有缓存，页面重新渲染，值不变时，会直接返回之前的计算结果，不会重新计算
  // 如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，一般使用 computed
  // computed 计算属性值是函数时，默认使用get方法。如果属性值是属性值时，属性有一个get和set方法，当数据发生变化时会调用set方法。
  computed: {
    full() {
      console.log("computed");
      return this.first + "" + this.second;
    },
  },
  // 监测的数据必须在 data 中声明或 props 中数据
  // 支持异步操作
  // 没有缓存，页面重新渲染时，值不改变时也会执行
  // 当一个属性值发生变化时，就需要执行相应的操作
  // 监听数据发生变化时，会触发其他操作，函数有两个参数：
  watch: {
    // watch 是监测 Vue 实例上的数据变动，通俗地讲，就是检测 data 内声明的数据。不仅可以监测简单数据，还可以监测对象或对象属性。
    // Demo1：监测简单数据
    first: {
      handler(newval, oldval) {
        console.log(newval);
        console.log(oldval);
      },
      //该值默认是false，在进入页面时，第一次绑定值，不会立刻执行监听，只有数据发生改变才会执行handler中的操作
      immediate: true,
    },
    // Demo2：监测对象
    // 监听对象的时候，需要使用深度监听。
    // girl: {
    //   handler(newval, oldval) {
    //     console.log("newval", newval);
    //     console.log("oldval", oldval);
    //   },
    //   //deep就是用来进行深度监听的！
    //   //深度监听虽然可以监听到对象的变化，但是无法监听到具体的是哪个属性发生变化了。
    //   deep: true,
    // },
    // Demo3：监听对象的单个属性
    "girl.boy.age": {
      handler(newval, oldval) {
        console.log("newval", newval);
        console.log("oldval", oldval);
      },
    },
  },
  methods: {
    // 根据结果，我们不难发现，根据方法获取到的数据，使用几次就需要重新计算几次，
    // 但计算属性不是，而是基于它们的响应式依赖进行缓存的，之后依赖属性值发生改变的时候，
    // 才会重新计算。由于它计算次数少，所以性能更高些。
    // fullfn() {
    //   console.log("methods");
    //   return this.first + "" + this.second;
    // },
    revisegirlboyname() {
      this.girl.boy.name = "xiaohei";
      console.log(this.girl);
    },
    revisegirlboyage() {
      this.girl.boy.age = "22";
      console.log(this.girl);
    },
    revisechild() {
      this.username = "123";
      this.password = "123";
    },
  },
};
</script>

<style>
</style>