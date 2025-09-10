import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
/**
 * 站点也叫
 * @param {*} param0
 * @returns
 */
const Footer = ({ siteInfo }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='author-card'>
      <div className='author-name'>
        <i className='mx-1 animate-pulse fas fa-heart text-red-500' />{' '}
        <a
          href={siteConfig('LINK')}
          className='underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
          {siteConfig('AUTHOR')}
        </a>
      </div>
      
      <div className='social-buttons'>
        <SocialButton />
      </div>

      <div className='text-xs text-gray-500 dark:text-gray-400 mt-3 text-center'>
        © {`${copyrightDate}`}
      </div>

      {siteConfig('BEI_AN') && (
        <div className='text-xs text-gray-500 dark:text-gray-400 mt-2 text-center'>
          <i className='fas fa-shield-alt' />{' '}
          <a href={siteConfig('BEI_AN_LINK')} className='hover:text-blue-600 dark:hover:text-blue-400'>
            {siteConfig('BEI_AN')}
          </a>
          <BeiAnGongAn />
        </div>
      )}

      <div className='hidden busuanzi_container_site_pv text-xs text-gray-500 dark:text-gray-400 mt-2 text-center'>
        <i className='fas fa-eye' />
        <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
      </div>
      <div className='hidden busuanzi_container_site_uv text-xs text-gray-500 dark:text-gray-400 mt-1 text-center'>
        <i className='fas fa-users' />{' '}
        <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
      </div>
      
      <div className='text-xs text-gray-400 dark:text-gray-500 mt-3 text-center'>
        Powered By{' '}
        <a
          href='https://github.com/tangly1024/NotionNext'
          className='underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
          NotionNext {siteConfig('VERSION')}
        </a>
      </div>
      
      {/* SEO title */}
      <h1 className='pt-1 hidden'>{siteConfig('TITLE')}</h1>
    </footer>
  )
}

export default Footer
