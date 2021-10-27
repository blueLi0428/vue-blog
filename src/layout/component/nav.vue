<template>
    <el-container class="w100">
        <nav-header />
        <search />
        <music />
    </el-container>
</template>

<script lang="ts">
    import navHeader from '/@/layout/component/header.vue'
    import search from '/@/layout/component/search.vue'
    import music from '/@/layout/component/music.vue'
    export default {
        name: "layoutNav",
        components: { navHeader, search, music }
    }
</script>

<style scoped>

</style>
