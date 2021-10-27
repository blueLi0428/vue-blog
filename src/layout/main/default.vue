<template>
    <el-container class="layout-container">
        <el-header class="layout-header">
            <nav-tool />
        </el-header>
        <el-container>
            <el-aside width="220px">
                <Aside />
            </el-aside>
            <el-container>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script lang="ts">
    import Aside from '/@/layout/component/aside.vue';
    import navTool from '/@/layout/component/nav.vue';
    import { useRoute } from 'vue-router';
    import { useStore } from '/@/store';
    import { getCurrentInstance } from 'vue'
    export default {
        name: "layoutDefaults",
        components: { Aside, navTool },
        setup() {
            const { proxy } = getCurrentInstance() as any;
            const store = useStore();
            const route = useRoute();
            return {

            };
        }
    }
</script>

<style scoped lang="scss">
    .layout-container {

        .layout-header {
            padding: 0;
            height: 50px;
        }
    }
</style>
