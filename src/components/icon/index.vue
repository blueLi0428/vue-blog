<template>
    <el-tooltip :content='title' effect="dark" :visible-arrow='false' :show-after='500' v-if='title'>
        <div>
            <svg :class="svgClass" aria-hidden="true">
                <use :xlink:href="iconName" />
            </svg>
        </div>
    </el-tooltip>
    <svg :class="svgClass" aria-hidden="true" v-else>
        <use :xlink:href="iconName" />
    </svg>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SvgIcon',
    props: {
        iconClass: {
            type: String,
            required: true
        },
        className: {
            type: String,
            default: ''
        },
        title: {
            type: String
        }
    },
    setup() {
    },
    computed: {
        iconName() {
            return `#${this.iconClass}`
        },
        svgClass() {
            if (this.className) {
                return 'svg-icon ' + this.className
            } else {
                return 'svg-icon'
            }
        },
    }
})
</script>

<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.svg-external-icon {
    background-color: currentColor;
    mask-size: cover!important;
    display: inline-block;
}
</style>
