import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import mitt from 'mitt';
import { directive } from '/@/utils/directive';
import { i18n } from '/@/i18n';
import { globalComponentSize } from '/@/utils/componentSize';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 自定义样式
import '/@/theme/index.scss';

// 阿里JS
import '../public/icons/ali/iconfont.css'; // 引入阿里的icon
import '../public/icons/ali/iconfont.js'; // 引入阿里的icon的js

import icon from '/@/components/icon/index.vue'

const app = createApp(App)
app
	.use(router)
	.use(store, key)
	.use(ElementPlus, { i18n: i18n.global.t, size: globalComponentSize })
	.use(i18n)
	.component('svg-icon', icon)
	.mount('#app')

app.config.globalProperties.mittBus = mitt();

// directive(app);
