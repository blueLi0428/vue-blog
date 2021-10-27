<template>
    <div>
<!--        <router-link to="/home">Home</router-link> |-->
<!--        <router-link to="/about">About</router-link>-->
        <Defaults />
    </div>
</template>

<script lang="ts">
    import Defaults from '/@/layout/main/default.vue';
    export default {
        name: 'layout',
        components: { Defaults },
        setup() {

        }
    };
</script>
