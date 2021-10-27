<template>
    <div class="layout-header">
        <el-link :underline="false" class="layout-header-link">
            <svg-icon icon-class="icon-mes-shouye3"/>&nbsp;
            LostDeer
        </el-link>
    </div>
</template>

<script lang="ts">
    export default {
        name: "navbarHeader"
    }
</script>

<style scoped lang="scss">
    .layout-header {
        width: 220px;
        height: 50px;
        background-color: #111111;
        .layout-header-link {
            color: #FFFFFF;
            line-height: 50px;
            font-size: 19px;
            font-weight: 700;
            float: left;
            padding: 0 20px;
        }
    }
</style>
