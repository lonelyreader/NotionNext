const CONFIG = {

  GITBOOK2_LOGO_IMG: '/Logo.webp',
  GITBOOK2_TOP_BAR: true, // 显示顶栏
  GITBOOK2_TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_GITBOOK2_TOP_TIPS || '',
  GITBOOK2_LOGO_DESCRIPTION: process.env.NEXT_PUBLIC_THEME_GITBOOK2_LOGO_DESCRIPTION || '<div>编程爱好者<br/>/互联网从业者<br/>/知识分享博主</div>',

  GITBOOK2_AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',

  GITBOOK2_POST_AD_ENABLE: process.env.NEXT_PUBLIC_GITBOOK2_POST_AD_ENABLE || false, // 文章列表是否插入广告

  GITBOOK2_POST_COVER_ENABLE: process.env.NEXT_PUBLIC_GITBOOK2_POST_COVER_ENABLE || false, // 是否展示博客封面

  GITBOOK2_ARTICLE_RECOMMEND_POSTS: process.env.NEXT_PUBLIC_GITBOOK2_ARTICLE_RECOMMEND_POSTS || true, // 文章详情底部显示推荐

  // 菜单配置
  GITBOOK2_MENU_CATEGORY: true, // 显示分类
  GITBOOK2_MENU_TAG: true, // 显示标签
  GITBOOK2_MENU_ARCHIVE: true, // 显示归档
  GITBOOK2_MENU_SEARCH: true // 显示搜索
}
export default CONFIG
