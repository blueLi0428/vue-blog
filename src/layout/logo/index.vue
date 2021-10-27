<template>
    <div class="layout-logo">
        <div class="layout-logo-box">
            <img src="https://q1.qlogo.cn/g?b=qq&nk=760481557&s=100" class="layout-logo-medium-img" />
            <div class="layout-logo-box-content">
                <span class="layout-logo-box-text">
                    {{ getThemeConfig.globalTitle }}
                    <svg-icon icon-class="icon-mes-down" />
                </span>
                <br>
                <span class="layout-logo-box-Introduction">这个人很懒，什么都没有写</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed } from 'vue'
    import { useStore } from '/@/store';
    export default {
        name: "layoutLogo",
        setup() {
            const store = useStore()

            const getThemeConfig = computed(() => {
                return store.state.themeConfig.themeConfig;
            });

            return {
                getThemeConfig
            }
        }
    }
</script>

<style scoped lang="scss">
    .layout-logo {
        background-color: #111111;
        width: 190px;
        height: 70px;
        padding: 15px;
        box-shadow: rgb(0 21 41 / 2%) 0px 1px 4px;
        color: #FFFFFF;
        font-size: 16px;
        animation: logoAnimation 0.3s ease-in-out;
        .layout-logo-box {
            width: 190px;
            height: 70px;
            cursor: pointer;
            //align-items: center;
            //display: flex;
            justify-content: center;
            &:hover {
                span {
                    color: var(--color-primary-light-2);
                }
            }
            .layout-logo-box-content {
                padding-top: 15px;
                .layout-logo-box-text {
                    font-size: 14px;
                    font-weight: 700;
                }
                .layout-logo-box-Introduction {
                    font-size: 12px;
                    color: #A0A0A0;
                }
            }
        }
        &-medium-img {
            width: 60px;
            border-radius: 60px;
            margin-top: 10px;
            margin-right: 23px;
            margin-left: 18px;
            float: left;
        }
    }
</style>
