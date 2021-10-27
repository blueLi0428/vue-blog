<template>
    <el-menu
        router
        :default-active="defaultActive"
        background-color="transparent"
        :collapse="isCollapse"
        :unique-opened="getThemeConfig.isUniqueOpened"
        :collapse-transition="false"
    >
        <template v-for="val in menuLists">
            <el-sub-menu :index="val.path" v-if="val.children && val.children.length > 0" :key="val.path">
                <template #title>
<!--                    <svg-icon :icon-class="val.meta.icon ? val.meta.icon : ''"/>-->
                    <span>{{ $t(val.meta.title) }}</span>
                </template>
                <menu-item :chil="val.children" />
            </el-sub-menu>
            <el-menu-item :index="val.path" :key="val.path" v-else>
<!--                <svg-icon :icon-class="val.meta.icon ? val.meta.icon : ''"/>-->
                <template #title v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)">
                    <span>{{ $t(val.meta.title) }}</span>
                </template>
                <template #title v-else>
                    <a :href="val.meta.isLink" target="_blank" rel="opener">{{ $t(val.meta.title) }}</a></template
                >
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script lang="ts">
    import { defineComponent, reactive, toRefs, computed } from 'vue'
    import menuItem from '/@/layout/menu/menuItem.vue'
    import { useStore } from '/@/store';
    import { useRoute } from 'vue-router';
    export default defineComponent({
        name: "menuVertical",
        components: { menuItem },
        props: {
            menuList: {
                type: Array,
                default: () => [],
            },
        },
        setup(props) {
            const store = useStore()
            const route = useRoute();
            const state = reactive({
                defaultActive: route.path,
                isCollapse: false,
            })

            // 获取布局配置信息
            const getThemeConfig = computed(() => {
                return store.state.themeConfig.themeConfig;
            });

            const menuLists = computed(() => {
                return props.menuList;
            });

            return {
                menuLists,
                getThemeConfig,
                ...toRefs(state),

            }
        }
    })
</script>

<style scoped>

</style>
