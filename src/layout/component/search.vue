<template>
    <div class="layout-search">
        <el-autocomplete
            v-model="queryValue"
            :fetch-suggestions="search"
            :placeholder="$t('userGlobal.layout.search.autocompletePlaceholder')"
            ref="layoutMenuAutocompleteRef"
            class="layout-autocomplete"
            @select="onHandleSelect"
            size="mini"
            @blur="onSearchBlur">
            <template #default="{ item }">
                <div>
                    <svg-icon :icon-class='item.meta.icon'/>
                    {{ $t(item.meta.title) }}
                </div>
            </template>
            <template #append>
                <el-button @click="search">
                    <svg-icon icon-class="icon-mes-sousuo" />
                </el-button>
            </template>
        </el-autocomplete>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue'
    // import { useI18n } from 'vue-i18n';
    export default {
        name: "layoutSearch",
        setup() {
            // const { t } = useI18n();
            const queryValue = ref('')
            const search = (queryString: any, cb: any) => {
                console.log(queryString, cb)
            }
            /**
             * 点击某个选项时
             * @param item
             */
            const onHandleSelect = (item) => {

            }

            /**
             * 输入框失去焦点时
             */
            const onSearchBlur = () => {

            }
            return {
                queryValue,

                search,
                onHandleSelect,
                onSearchBlur
            }
        }
    }
</script>

<style lang="scss">
    .layout-search {
        width: calc(84vw - 250px);
        padding: 10px 15px;
        background-color: #F9F9F9;
        .layout-autocomplete {
            border-radius: 100%;
            float: left;
        }
    }
</style>
