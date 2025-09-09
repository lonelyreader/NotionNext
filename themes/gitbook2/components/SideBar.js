import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import SmartLink from '@/components/SmartLink'

/**
 * GitBook风格侧边栏 - 按Category分组展示Posts
 * @param {*} props
 * @returns
 */
export default function SideBar(props) {
  const { filteredNavPages = [] } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const [expandedCategories, setExpandedCategories] = useState(new Set())
  const [currentPath, setCurrentPath] = useState('')

  // 监听路由变化
  useEffect(() => {
    setCurrentPath(router.asPath)
  }, [router.asPath])

  // 按Category分组文章
  const groupedPosts = filteredNavPages.reduce((acc, post) => {
    if (post.type === 'Post' && post.status === 'Published') {
      const category = post.category || '未分类'
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(post)
    }
    return acc
  }, {})

  // 按文章发布日期排序
  Object.keys(groupedPosts).forEach(category => {
    groupedPosts[category].sort((a, b) => {
      const dateA = new Date(a.publishDate || a.date?.start_date || 0)
      const dateB = new Date(b.publishDate || b.date?.start_date || 0)
      return dateB - dateA
    })
  })

  // 默认展开当前文章所在的分类
  useEffect(() => {
    const currentPost = filteredNavPages.find(post => post.href === currentPath)
    if (currentPost && currentPost.category) {
      setExpandedCategories(prev => new Set([...prev, currentPost.category]))
    }
  }, [currentPath, filteredNavPages])

  const toggleCategory = (category) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(category)) {
        newSet.delete(category)
      } else {
        newSet.add(category)
      }
      return newSet
    })
  }

  const isCurrentPost = (post) => {
    return post.href === currentPath
  }

  return (
    <div className='h-full overflow-y-auto bg-gray-50 dark:bg-gray-900'>
      <div className='p-4'>
        {/* 标题 */}
        <div className='mb-6'>
          <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center'>
            <i className='mr-2 fas fa-book' />
            文档导航
          </h2>
          <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
            按分类浏览文章
          </p>
        </div>

        {/* 分类列表 */}
        <div className='space-y-2'>
          {Object.keys(groupedPosts).map(category => {
            const posts = groupedPosts[category]
            const isExpanded = expandedCategories.has(category)
            
            return (
              <div key={category} className='border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden'>
                {/* 分类标题 */}
                <button
                  onClick={() => toggleCategory(category)}
                  className='w-full px-4 py-3 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between'
                >
                  <div className='flex items-center'>
                    <i className='mr-2 fas fa-folder text-blue-500' />
                    <span className='font-medium text-gray-800 dark:text-gray-200'>
                      {category}
                    </span>
                    <span className='ml-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full'>
                      {posts.length}
                    </span>
                  </div>
                  {isExpanded ? (
                    <i className='fas fa-chevron-down text-gray-500' />
                  ) : (
                    <i className='fas fa-chevron-right text-gray-500' />
                  )}
                </button>

                {/* 文章列表 */}
                {isExpanded && (
                  <div className='bg-gray-50 dark:bg-gray-900'>
                    {posts.map(post => (
                      <SmartLink
                        key={post.id}
                        href={post.href}
                        className={`block px-4 py-2 text-sm transition-colors duration-200 border-l-4 ${
                          isCurrentPost(post)
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-700 dark:text-blue-300'
                            : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                        }`}
                      >
                        <div className='flex items-start'>
                          {post.pageIcon && (
                            <span className='mr-2 mt-0.5 text-xs'>
                              {post.pageIcon}
                            </span>
                          )}
                          <div className='flex-1 min-w-0'>
                            <div className={`font-medium truncate ${
                              isCurrentPost(post) ? 'text-blue-700 dark:text-blue-300' : ''
                            }`}>
                              {post.title}
                            </div>
                            {post.summary && (
                              <div className='text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2'>
                                {post.summary}
                              </div>
                            )}
                          </div>
                        </div>
                      </SmartLink>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* 统计信息 */}
        <div className='mt-6 pt-4 border-t border-gray-200 dark:border-gray-700'>
          <div className='text-xs text-gray-500 dark:text-gray-400'>
            <div className='flex justify-between'>
              <span>总文章数:</span>
              <span>{filteredNavPages.filter(p => p.type === 'Post' && p.status === 'Published').length}</span>
            </div>
            <div className='flex justify-between'>
              <span>分类数:</span>
              <span>{Object.keys(groupedPosts).length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}