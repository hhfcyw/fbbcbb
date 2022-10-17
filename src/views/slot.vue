<template>
  <div class="slot">
    <h3>我是插槽slot - 父组件</h3>
    <!-- 默认插槽： 父组件会替换掉子组件slot里面的值 slot是写在子组件上的-->
    <!-- <slotchild>这是父组件传入的slot值</slotchild> -->

    <!-- 具名插槽：父组件（#s_1）用name的绑定一一对插槽（子组件name="s_1"）的传入 而且每一个具名插槽要用template包着-->
    <!-- <slotchild>
        <template #s_1>
            <p>这是插槽一的内容</p>
        </template>
        <template #s_2>
            <p>这是插槽二的内容</p>
        </template>
        <template #s_3>
            <p>这是插槽三的内容</p>
        </template>
    </slotchild> -->

    <!-- 作用域插槽 而父组件用#default（定义一个变量名，相当于容器，把子组件传过来的数据装进去）获取子组件传过来的数据 而且每一个作用域插槽要用template包着-->
    <!-- 子组件传递数据给父组件，父组件用子组件的数据插入子组件 -->
    <!-- <slotchild>
    <template  #default="objprops">
      {{objprops.objdata.girl.age}}
    </template>
    </slotchild> -->

    <slotchild :arrdata="arr">
      <template #default="slotprop">
        {{ slotprop.arrprop.c }}
      </template>
    </slotchild>
  </div>
</template>

<script>
//vue插槽slot 作用：1、父组件向子组件传递内容 2、拓展、复用、定制组件
//插槽分为默认插槽 具名插槽 作用域插槽
import slotchild from "../components/slotchild";
export default {
  name: "refchild",
  components: { slotchild },
  data() {
    return {
      arr: [
        { a: 123, b: 456, c: 789 },
        { a: 456, b: 789, c: 123 },
        { a: 789, b: 123, c: 456 },
      ],
    };
  },
  methods: {
    look(arrprop) {
      console.log(arrprop);
    },
  },
};
</script>
