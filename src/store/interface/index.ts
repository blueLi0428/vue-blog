

// 用户信息
export interface UserInfosState {
	userInfos: object;
}

/**
 * 全局主题设置
 */
export interface ThemeConfigState {
	themeConfig: {
		globalI18n: string,// 全局国际化配置
		lockScreenTime: number,// 锁屏事件
		isLockScreen: boolean,// 是否锁屏
		globalTitle: string,// 全局标题
		isUniqueOpened: boolean,// 是否开启菜单手风琴效果
	}
}

/**
 * 路由列表
 */
export interface RoutesListState {
	routesList: Array<object>;
	isColumnsMenuHover: Boolean;
	isColumnsNavHover: Boolean;
}

// 主接口(顶级类型声明)
export interface RootStateTypes {
	themeConfig: ThemeConfigState;
	routesList: RoutesListState;
	// keepAliveNames: KeepAliveNamesState;
	// tagsViewRoutes: TagsViewRoutesState;
	userInfos: UserInfosState;
	// requestOldRoutes: RequestOldRoutesState;
	// dictionaries: DictionariesState;
}
