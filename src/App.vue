<template>
    <el-config-provider local="zh-cn">
        <router-view v-show="getThemeConfig.lockScreenTime !== 0" />
<!--        <LockScreen v-if="getThemeConfig.isLockScreen" />-->
    </el-config-provider>
</template>
<script lang="ts">
    import { defineComponent, computed } from 'vue'
    import { useStore } from '/@/store';
    export default defineComponent({
        name: 'app',
        setup() {
            // 获取store，便于发请求获取参数
            const store = useStore()

            // 获取布局配置信息
            const getThemeConfig = computed(() => {
                return store.state.themeConfig.themeConfig;
            });

            return {
                getThemeConfig,

            }
        }
    })

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
