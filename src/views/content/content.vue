<template>
    <keep-alive><router-view class="content"></router-view></keep-alive>
    
    <!-- include="father" 字符串或正则表达式。只有名称匹配的组件会被缓存 -->
    <!-- exclude="father" 字符串或正则表达式。任何名称匹配的组件都不会被缓存 -->
    <!-- <keep-alive include="father"><router-view class="content"></router-view></keep-alive> -->
    <!-- <keep-alive exclude="father"><router-view class="content"></router-view></keep-alive> -->

    <!-- 根据路由的meta里的Keepalive属性进行判断是否需要缓存 -->
    <!-- <keep-alive><router-view v-if="$route.meta.Keepalive"></router-view></keep-alive> -->
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>
