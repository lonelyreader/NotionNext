
/**
 * GitBook4 AI风格主题配置文件
 */
const CONFIG = {
  // 基础设置
  GITBOOK_INDEX_PAGE: process.env.NEXT_PUBLIC_GITBOOK_INDEX_PAGE || 'about',
  
  // 菜单配置
  GITBOOK_MENU_CATEGORY: true, // 显示分类
  GITBOOK_MENU_TAG: true, // 显示标签
  GITBOOK_MENU_ARCHIVE: true, // 显示归档
  GITBOOK_MENU_SEARCH: true, // 显示搜索

  // AI风格特性
  GITBOOK_AI_BACKGROUND: true, // 启用AI背景
  GITBOOK_GLASS_EFFECTS: true, // 启用玻璃效果
  GITBOOK_GRADIENT_BUTTONS: true, // 启用渐变按钮

  // 交互设置
  GITBOOK_EXCLUSIVE_COLLAPSE: true, // 独占折叠
  GITBOOK_LATEST_POST_RED_BADGE: true, // 最新文章红点

  // 布局设置
  GITBOOK_POST_LIST_COVER: true, // 列表显示文章封面
  GITBOOK_POST_LIST_SUMMARY: true, // 显示文章摘要
  GITBOOK_POST_LIST_PREVIEW: true, // 显示预览
  GITBOOK_POST_DETAIL_CATEGORY: true, // 文章详情显示分类
  GITBOOK_POST_DETAIL_TAG: true, // 文章详情显示标签

  // 组件显示
  GITBOOK_WIDGET_TO_TOP: true, // 显示回到顶部
  GITBOOK_LOADING_COVER: true, // 显示加载遮罩

  // 侧边栏
  GITBOOK_SIDEBAR_COLLAPSE_SATUS_DEFAULT: false, // 侧边栏默认折叠状态

  // SEO
  GITBOOK_SEO_GOOGLE_SITE_VERIFICATION: '', // Google验证码

  // 社交分享
  GITBOOK_SOCIAL_CARD: true, // 社交卡片
  GITBOOK_SOCIAL_TWITTER: '', // Twitter用户名
  GITBOOK_SOCIAL_FACEBOOK: '', // Facebook页面

  // 评论系统
  GITBOOK_COMMENTS_PROVIDER: 'giscus', // 评论提供商

  // 统计分析
  GITBOOK_ANALYTICS_BUSUANZI: true, // 不蒜子统计

  // 广告设置
  GITBOOK_AD_ENABLE: false, // 是否启用广告

  // 订阅设置
  GITBOOK_NEWSLETTER: false, // 邮件订阅

  // PWA设置
  GITBOOK_PWA: true, // 渐进式Web应用
}

module.exports = CONFIG
