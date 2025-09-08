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
    <footer className='z-20 border p-4 rounded-xl border-purple-600/20 bg-white/90 dark:bg-purple-900/25 dark:border-yellow-400/15 backdrop-blur-xl justify-center text-center w-full text-sm relative card'>
      <SocialButton />

      <div className='flex justify-center'>
        <div>
          <i className='mx-1 animate-pulse fas fa-heart' />{' '}
          <a
            href={siteConfig('LINK')}
            className='underline font-bold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-yellow-400 transition-colors duration-200'>
            {siteConfig('AUTHOR')}
          </a>
          .<br />
        </div>
        © {`${copyrightDate}`}
      </div>

      {siteConfig('BEI_AN') && (
        <>
          <i className='fas fa-shield-alt' />{' '}
          <a href={siteConfig('BEI_AN_LINK')} className='mr-2'>
            {siteConfig('BEI_AN')}
          </a>
          <BeiAnGongAn />
          <br />
        </>
      )}

      <span className='hidden busuanzi_container_site_pv'>
        <i className='fas fa-eye' />
        <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
      </span>
      <span className='pl-2 hidden busuanzi_container_site_uv'>
        <i className='fas fa-users' />{' '}
        <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
      </span>
      <div className='text-xs font-serif'>
        Powered By{' '}
        <a
          href='https://github.com/tangly1024/NotionNext'
          className='underline text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-yellow-400 transition-colors duration-200'>
          NotionNext {siteConfig('VERSION')}
        </a>
      </div>
      {/* SEO title */}
      <h1 className='pt-1 hidden'>{siteConfig('TITLE')}</h1>
    </footer>
  )
}

export default Footer
