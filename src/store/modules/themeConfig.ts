import { Module } from 'vuex';
// 此处加上 `.ts` 后缀报错，具体原因不详
import { ThemeConfigState, RootStateTypes } from '/@/store/interface/index';

const themeConfigModule: Module<ThemeConfigState, RootStateTypes> = {
	namespaced: true,
	state: {
		themeConfig: {
			// 全局国际化配置
			globalI18n: 'zh-cn',
			// 是否开启自动锁屏
			isLockScreen: false,
			// 开启自动锁屏倒计时(s/秒)
			lockScreenTime: 30,
			// 全局标题
			globalTitle: 'candy33',
			// 是否开启菜单手风琴效果
			isUniqueOpened: false,
		}
	},
	mutations: {
		// 设置布局配置
		getThemeConfig(state: any, data: object) {
			state.themeConfig = data;
		},
	},
	actions: {
		// 设置布局配置
		setThemeConfig({ commit }, data: object) {
			commit('getThemeConfig', data);
		},
	},
}

export default themeConfigModule;
