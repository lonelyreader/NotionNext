# Vercel 部署指南 - GitBook2 主题

## 🚀 部署前准备

### 1. 环境变量配置

在 Vercel 项目设置中添加以下环境变量：

#### 必需的环境变量
```
NOTION_PAGE_ID=your_notion_page_id_here
NOTION_ACCESS_TOKEN=your_notion_access_token_here
NEXT_PUBLIC_THEME=gitbook2
```

#### 推荐的环境变量
```
NEXT_PUBLIC_LANG=zh-CN
NEXT_PUBLIC_AUTHOR=您的名字
NEXT_PUBLIC_BIO=您的简介
NEXT_PUBLIC_LINK=https://your-domain.com
NEXT_PUBLIC_GITBOOK2_INDEX_PAGE=about
NEXT_PUBLIC_GITBOOK2_AUTO_SORT=true
NEXT_PUBLIC_GITBOOK2_LATEST_POST_RED_BADGE=true
```

### 2. 构建配置

Vercel 会自动检测 Next.js 项目，使用以下配置：

- **构建命令**: `npm run build`
- **输出目录**: `.next`
- **安装命令**: `npm install`
- **Node.js 版本**: 20.x

### 3. 常见问题解决

#### 问题 1: Notion API 406 错误
**原因**: Notion API 访问权限或配置问题
**解决方案**:
1. 检查 `NOTION_ACCESS_TOKEN` 是否正确
2. 确保 Notion 数据库已正确分享给集成
3. 检查 `NOTION_PAGE_ID` 格式是否正确

#### 问题 2: 构建超时
**原因**: 构建时间过长
**解决方案**:
1. 增加 `NEXT_PUBLIC_REVALIDATE_SECOND` 值（如 300）
2. 减少文章数量进行测试
3. 检查网络连接

#### 问题 3: 页面显示空白
**原因**: SSR 渲染问题
**解决方案**:
1. 确保所有浏览器 API 调用都有 `typeof window !== 'undefined'` 检查
2. 检查动态导入是否正确配置
3. 查看 Vercel 函数日志

### 4. 性能优化建议

1. **启用缓存**: 设置合适的 `NEXT_PUBLIC_REVALIDATE_SECOND` 值
2. **图片优化**: 使用 Next.js 的 Image 组件
3. **代码分割**: 使用动态导入减少初始包大小
4. **CDN**: Vercel 自动提供全球 CDN

### 5. 监控和调试

1. **Vercel 仪表板**: 查看部署状态和函数日志
2. **实时日志**: 使用 `vercel logs` 命令
3. **性能监控**: 启用 Vercel Analytics

### 6. 部署步骤

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 部署并测试

### 7. 故障排除

如果遇到问题，请检查：
- [ ] 环境变量是否正确设置
- [ ] Notion 数据库权限是否正确
- [ ] 构建日志中是否有错误信息
- [ ] 网络连接是否正常

## 📞 支持

如果仍有问题，请查看：
- [NotionNext 官方文档](https://docs.tangly1024.com/)
- [Vercel 部署文档](https://vercel.com/docs)
- [GitHub Issues](https://github.com/tangly1024/NotionNext/issues)
