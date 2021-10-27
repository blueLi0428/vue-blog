<template>
    <el-aside class="layout-aside">
        <logo />
<!--        <el-scrollbar class="flex-auto" ref="layoutAsideScrollbarRef" >-->
<!--            <Vertical :menuList="menuList" />-->
<!--        </el-scrollbar>-->
    </el-aside>
</template>

<script lang="ts">
    import { reactive, toRefs } from 'vue'
    import Logo from '/@/layout/logo/index.vue'
    import Vertical from '/@/layout/menu/vertical.vue';
    export default {
        name: "layoutAside",
        components: { Logo, Vertical },
        setup() {
            const state = reactive({
                menuList: []
            })

            return {
                ...toRefs(state)
            }
        }
    }
</script>

<style scoped lang="scss">
    .layout-aside {
        width: 220px;
        height: calc(100vh - 50px);
        background-color: #111111;
    }
</style>
