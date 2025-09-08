const CONFIG = {
  // 博客基础配置
  CURSOR_INDEX_PAGE: 'about', // 文档首页显示的文章，请确此路径包含在您的notion数据库中

  CURSOR_AUTO_SORT: process.env.NEXT_PUBLIC_CURSOR_AUTO_SORT || true, // 是否自动按分类名 归组排序文章；自动归组可能会打乱您Notion中的文章顺序

  CURSOR_LATEST_POST_RED_BADGE:
    process.env.NEXT_PUBLIC_CURSOR_LATEST_POST_RED_BADGE || true, // 是否给最新文章显示红点

  // Cursor风格菜单
  CURSOR_MENU_CATEGORY: true, // 显示分类
  CURSOR_BOOK_MENU_TAG: true, // 显示标签
  CURSOR_MENU_ARCHIVE: true, // 显示归档
  CURSOR_MENU_SEARCH: true, // 显示搜索

  // 导航文章自动排他折叠
  CURSOR_EXCLUSIVE_COLLAPSE: true, // 一次只展开一个分类，其它文件夹自动关闭。

  CURSOR_FOLDER_HOVER_EXPAND: false, // 左侧导航文件夹鼠标悬停时自动展开；若为false，则要点击才能展开

  // Cursor风格Widget
  CURSOR_WIDGET_REVOLVER_MAPS:
    process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // 地图插件
  CURSOR_WIDGET_TO_TOP: true, // 跳回顶部
  
  // Cursor特有功能
  CURSOR_TERMINAL_ENABLED: true, // 启用终端界面
  CURSOR_COMMAND_PALETTE: true, // 启用命令面板
  CURSOR_TAB_SYSTEM: true, // 启用标签页系统
  CURSOR_SIDEBAR_COLLAPSIBLE: true, // 可折叠侧边栏
  CURSOR_DARK_THEME: true, // 默认深色主题
  
  // 博客文章配置
  CURSOR_POST_TITLE_ICON: true, // 显示文章标题图标
  CURSOR_POST_LIST_PREVIEW: false, // 是否在列表中显示文章预览
  CURSOR_POSTS_PER_PAGE: 10, // 每页显示文章数量
  
  // 编辑器配置
  CURSOR_EDITOR_FONT_SIZE: 14, // 编辑器字体大小
  CURSOR_EDITOR_LINE_HEIGHT: 1.5, // 编辑器行高
  CURSOR_EDITOR_TAB_SIZE: 2, // 编辑器缩进大小
  
  // 主题配置
  CURSOR_THEME_MODE: 'dark', // 主题模式: 'dark' | 'light' | 'auto'
  CURSOR_ACTIVITY_BAR_VISIBLE: true, // 显示活动栏
  CURSOR_STATUS_BAR_VISIBLE: true, // 显示状态栏
  CURSOR_SIDEBAR_WIDTH: 280, // 侧边栏宽度
  CURSOR_ACTIVITY_BAR_WIDTH: 48 // 活动栏宽度
}
export default CONFIG
