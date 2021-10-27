import { createI18n } from 'vue-i18n';
import { store } from '/@/store/index';
import zhcnLocale from 'element-plus/lib/locale/lang/zh-cn';
import enLocale from 'element-plus/lib/locale/lang/en';
import zhtwLocale from 'element-plus/lib/locale/lang/zh-tw';


import zhchLang from '/@/i18n/lang/zh-ch'



const messages = {
	[zhcnLocale.name]: {
		...zhcnLocale,
		userGlobal: {
			...zhchLang
		}
	},
	[enLocale.name]: {
		...enLocale,
	},
	[zhtwLocale.name]: {
		...zhtwLocale,
	}
}

// 导出语言国际化
export const i18n = createI18n({
	locale: store.state.themeConfig.themeConfig.globalI18n,
	// fallbackLocale: zhcnLocale.name,
	messages,
});
