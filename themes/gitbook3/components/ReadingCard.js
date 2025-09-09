import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'
import CONFIG from '../config'
import ArticleInfo from './ArticleInfo'
import Catalog from './Catalog'
import Footer from './Footer'
import NotionPage from '@/components/NotionPage'
import Comment from '@/components/Comment'
import ShareBar from '@/components/ShareBar'
import ArticleAround from './ArticleAround'
import { ArticleLock } from './ArticleLock'
import WWAds from '@/components/WWAds'
import NotionIcon from '@/components/NotionIcon'
import { useRouter } from 'next/router'
import { getShortId } from '@/lib/utils/pageId'
import { isBrowser } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'

/**
 * GitBook3 阅读卡片组件
 * 合并了原来的中列 ContentColumn 和右侧栏 RightAside
 * 实现一体化的阅读体验
 */
const ReadingCard = props => {
  const { post, children, prev, next, notice, slotTop } = props
  const { locale } = useGlobal()
  const router = useRouter()

  // 文章锁状态
  const [lock, setLock] = useState(true)
  const targetRef = useRef(null)

  useEffect(() => {
    if (post?.password && post?.password !== '') {
      setLock(true)
    } else {
      setLock(false)
    }
  }, [post])

  if (!post) {
    return null
  }

  return (
    <div id='gitbook3-reading-card' className='gitbook3-reading-card'>
      {/* CardHeader - 文档抬头区域 */}
      <header className='gitbook3-card-header'>
        <div className='gitbook3-card-header-content'>
          {/* 页面图标 */}
          {post?.type === 'Page' && post?.pageIcon && (
            <NotionIcon icon={post.pageIcon} className='gitbook3-page-icon' />
          )}
          
          {/* 文档标题 */}
          <h1 className='gitbook3-document-title'>
            {post?.title}
          </h1>
          
          {/* 可选副标题/描述 */}
          {post?.summary && (
            <p className='gitbook3-document-summary'>{post.summary}</p>
          )}
          
          {/* 文章元信息 */}
          <ArticleInfo post={post} />
        </div>
      </header>

      {/* CardBody - 卡片正文区域，内部两列布局 */}
      <div className='gitbook3-card-body'>
        {/* MainPane - 正文内容 */}
        <article
          ref={targetRef}
          id='notion-article'
          className='gitbook3-main-pane notion-article'
          itemScope
          itemType='https://schema.org/Article'
        >
          {/* 移动端目录（在正文前部） */}
          <aside className='gitbook3-side-pane gitbook3-side-pane-mobile'>
            <Catalog post={post} />
          </aside>

          {/* 文章锁 */}
          {lock && <ArticleLock post={post} setLock={setLock} />}

          {/* 文章内容 */}
          {!lock && (
            <>
              {slotTop}
              <WWAds className='w-full' orientation='horizontal' />
              {children}
              <NotionPage post={post} />
              <ShareBar post={post} />
              <ArticleAround prev={prev} next={next} />
              <Comment frontMatter={post} />
            </>
          )}
        </article>

        {/* SidePane - 辅助信息（桌面端） */}
        <aside className='gitbook3-side-pane gitbook3-side-pane-desktop'>
          {/* 目录 ToC */}
          <div className='gitbook3-toc-section'>
            <Catalog post={post} />
          </div>
          
          {/* 元信息 Meta */}
          <div className='gitbook3-meta-section'>
            {/* 这里可以添加其他元信息组件 */}
          </div>
        </aside>
      </div>

      {/* 移动端底部 */}
      <div className='gitbook3-mobile-footer'>
        <Footer {...props} />
      </div>
    </div>
  )
}

export default ReadingCard