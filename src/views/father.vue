<template>
  <div id="father">
    <p>我是父组件</p>
    <p>{{ obj.father.name }} {{ obj.father.age }} {{ obj.father.heigth }}</p>

    <button @click="revise">修改传递给子组件的值</button>

    <!-- this.$children 父组件可以直接访问它所有的子组件 this.$children[0]以数组形式-->
    <button @click="revisesontitle">修改子组件标题</button>

    <!-- 通过eventBus事件总线给兄弟组件传递数据（父组件通过bus.$emit 自定义事件传递数据（前提要引入eventbus）而兄弟组件则bus.$on 接受自定义事件 进行回调函数 获取数据） -->
    <button @click="eventbusbrother()">通过事件总线传递数据给兄弟组件</button>

    <!-- .sync 相当于给组件绑定了一个属性(子组件中还是通过props接收)，并且约定好了一个自定义事件，@update:属性名，这样一来，子组件只需要通过 $emit(update:属性名,val)，即可修改父组件属性，这样一来无论是调用还是维护都十分方便了 -->
    <!-- .sync和this.$parent,因为vue是单向数据流，前面是显式，后面是隐式，隐式容易导致逻辑混乱 -->
    <son
      :son.sync="obj.son"
      :data="data"
      @updatesonnature="addsonnature($event)"
      @manyfn1="manyfn1"
    ></son>
    <!-- 这里绑定的属性（通过在子组件引入孙子组件上添加v-bind="$attrs"）和方法（通过在子组件引入孙子组件上添加v-on="$listeners"）是父组件传递给孙子组件的 -->

    <!-- <son2 @fun1="manyfn1" @fun2="manyfn2" @fun3="manyfn3"></son2> -->

    <!-- vue中v-model和：value (即：v-bind: value) 1、区别
    v-mode实现了视图和data中数据的双向绑定，两者其一改变均改变
    v-bind:value只是将初始化时data中的数据绑定到input上，修改input中的值并不会改变data中的数据。
    2、v-model的本质
    v-model其实时一个语法糖、背卮本质上是v-bind:value和v-on:input两个操作
    父组件将值通过：value传给子组件、当值改变的时候，子组件通过＠input通知父组件值发生了改变，形成单向数据流 -->

    <p>-----------------</p>
    <p>自定义组件v-model -> 子组件son3</p>
    <p>{{ data }}</p>
    <p>{{ check }}</p>
    <son3 v-model="data" @test="test"></son3>
  </div>
</template>

<script>
import son from "../components/son";
import bus from "../utils/eventBus";
import son3 from "../components/son3";
// import son2 from "../components/son2";
export default {
  name: "father",
  components: { son, son3 },
  //provide：可以让我们指定想要提供给后代组件的数据或方法
  provide() {
    return {
      someData: this.grandson,
      someMethod: this.tograndsonfn,
    };
  },
  data() {
    return {
      obj: {
        father: {
          name: "baba",
          age: 45,
          heigth: "170",
        },
        son: {
          name: "daerzi",
          age: "18",
          heigth: "180",
          girl: null,
        },
      },
      fathertouncle: "你是我的弟弟",
      grandson: "爷爷给我买了礼物",
      //爸爸给孙子的数据
      data: 20220728,
      check: true,
    };
  },
  methods: {
    revise() {
      this.obj.son = { name: "ererzi", age: "16", heigth: "178" };
    },
    addsonnature($event) {
      this.obj.son.heigth = "200";
      console.log($event);
      this.obj.son.girl = $event;
    },
    revisesontitle() {
      this.$children[0].msg = "被修改后的子组件标题";
    },
    eventbusbrother() {
      bus.$emit("sharedata", this.fathertouncle);
    },
    tograndsonfn() {
      console.log("这是注入的方法");
    },
    manyfn1() {
      console.log("manyfn1");
    },
    manyfn2() {
      console.log("manyfn2");
    },
    manyfn3() {
      console.log("manyfn3");
    },
    test(...arg){
      console.log(...arg)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
