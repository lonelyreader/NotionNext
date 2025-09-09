import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import CONFIG from '../config'
import ArticleInfo from './ArticleInfo'
import Catalog from './Catalog'
import InfoCard from './InfoCard'
import RevolverMaps from './RevolverMaps'
import Live2D from '@/components/Live2D'
import Announcement from './Announcement'
import { AdSlot } from '@/components/GoogleAdsense'

/**
 * GitBook3 右侧信息栏
 * 包含：MetaCard（最后更新等）+ 粘性目录 ToC
 */
export default function RightAside(props) {
  const { slotRight, post, notice } = props
  const { fullWidth } = useGlobal()
  const router = useRouter()

  // 如果全宽模式，不显示右侧栏
  if (fullWidth) {
    return null
  }

  return (
    <aside 
      id='gitbook3-right-aside' 
      className='gitbook3-right-aside'
      role="complementary"
      aria-label="Document information">
      
      <div className='gitbook3-right-content'>
        {/* MetaCard：文章信息 */}
        <div className='gitbook3-meta-card'>
          <ArticleInfo post={post || notice} />
        </div>

        {/* 粘性目录 */}
        <div className='gitbook3-sticky-toc'>
          <Catalog {...props} />
        </div>

        {/* 嵌入内容 */}
        {slotRight}

        {/* 首页特殊内容 */}
        {router.route === '/' && (
          <>
            <div className='gitbook3-info-card'>
              <InfoCard {...props} />
            </div>
            
            {siteConfig('GITBOOK_WIDGET_REVOLVER_MAPS', null, CONFIG) === 'true' && (
              <div className='gitbook3-maps'>
                <RevolverMaps />
              </div>
            )}
            
            <div className='gitbook3-live2d'>
              <Live2D />
            </div>
          </>
        )}

        {/* 公告 */}
        <div className='gitbook3-announcement'>
          <Announcement {...props} />
        </div>

        {/* 广告 */}
        <div className='gitbook3-ads'>
          <AdSlot type='in-article' />
        </div>
      </div>
    </aside>
  )
}
