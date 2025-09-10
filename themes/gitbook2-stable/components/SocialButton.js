import QrCode from '@/components/QrCode'
import { siteConfig } from '@/lib/config'
import { useRef, useState } from 'react'
import { handleEmailClick } from '@/lib/plugins/mailEncrypt'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  const CONTACT_GITHUB = siteConfig('CONTACT_GITHUB')
  const CONTACT_TWITTER = siteConfig('CONTACT_TWITTER')
  const CONTACT_TELEGRAM = siteConfig('CONTACT_TELEGRAM')

  const CONTACT_LINKEDIN = siteConfig('CONTACT_LINKEDIN')
  const CONTACT_WEIBO = siteConfig('CONTACT_WEIBO')
  const CONTACT_INSTAGRAM = siteConfig('CONTACT_INSTAGRAM')
  const CONTACT_EMAIL = siteConfig('CONTACT_EMAIL')
  const ENABLE_RSS = siteConfig('ENABLE_RSS')
  const CONTACT_BILIBILI = siteConfig('CONTACT_BILIBILI')
  const CONTACT_YOUTUBE = siteConfig('CONTACT_YOUTUBE')

  const CONTACT_XIAOHONGSHU = siteConfig('CONTACT_XIAOHONGSHU')
  const CONTACT_ZHISHIXINGQIU = siteConfig('CONTACT_ZHISHIXINGQIU')
  const CONTACT_WEHCHAT_PUBLIC = siteConfig('CONTACT_WEHCHAT_PUBLIC')
  const [qrCodeShow, setQrCodeShow] = useState(false)

  const openPopover = () => {
    setQrCodeShow(true)
  }
  const closePopover = () => {
    setQrCodeShow(false)
  }

  const emailIcon = useRef(null)


  return (
    <div className='w-full justify-center flex-wrap flex'>
      <div className='flex items-center gap-2'>
        {CONTACT_GITHUB && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'github'}
            href={CONTACT_GITHUB}
            className='social-button'>
            <i className='fab fa-github' />
          </a>
        )}
        {CONTACT_TWITTER && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'twitter'}
            href={CONTACT_TWITTER}
            className='social-button'>
            <i className='fab fa-twitter' />
          </a>
        )}
        {CONTACT_TELEGRAM && (
          <a
            target='_blank'
            rel='noreferrer'
            href={CONTACT_TELEGRAM}
            title={'telegram'}
            className='social-button'>
            <i className='fab fa-telegram' />
          </a>
        )}
        {CONTACT_LINKEDIN && (
          <a
            target='_blank'
            rel='noreferrer'
            href={CONTACT_LINKEDIN}
            title={'linkIn'}
            className='social-button'>
            <i className='fab fa-linkedin' />
          </a>
        )}
        {CONTACT_WEIBO && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'weibo'}
            href={CONTACT_WEIBO}
            className='social-button'>
            <i className='fab fa-weibo' />
          </a>
        )}
        {CONTACT_INSTAGRAM && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'instagram'}
            href={CONTACT_INSTAGRAM}
            className='social-button'>
            <i className='fab fa-instagram' />
          </a>
        )}
        {CONTACT_EMAIL && (
          <a
            onClick={e => handleEmailClick(e, emailIcon, CONTACT_EMAIL)}
            title='email'
            className='social-button cursor-pointer'
            ref={emailIcon}>
            <i className='fas fa-envelope' />
          </a>
        )}
        {ENABLE_RSS && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'RSS'}
            href={'/rss/feed.xml'}
            className='social-button'>
            <i className='fas fa-rss' />
          </a>
        )}
        {CONTACT_BILIBILI && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'bilibili'}
            href={CONTACT_BILIBILI}
            className='social-button'>
            <i className='fab fa-bilibili' />
          </a>
        )}
        {CONTACT_YOUTUBE && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'youtube'}
            href={CONTACT_YOUTUBE}
            className='social-button'>
            <i className='fab fa-youtube' />
          </a>
        )}
        {CONTACT_XIAOHONGSHU && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'小红书'}
            href={CONTACT_XIAOHONGSHU}
            className='social-button'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='w-4 h-4'
              src='/svg/xiaohongshu.svg'
              alt='小红书'
            />
          </a>
        )}
        {CONTACT_ZHISHIXINGQIU && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'知识星球'}
            className='social-button'
            href={CONTACT_ZHISHIXINGQIU}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='w-4 h-4'
              src='/svg/zhishixingqiu.svg'
              alt='知识星球'
            />
          </a>
        )}
        {CONTACT_WEHCHAT_PUBLIC && (
          <button
            onMouseEnter={openPopover}
            onMouseLeave={closePopover}
            aria-label={'微信公众号'}
            className='social-button relative'>
            <i className='fab fa-weixin' />
            {/* 二维码弹框 */}
            <div className='absolute'>
              <div
                id='pop'
                className={
                  (qrCodeShow ? 'opacity-100 ' : ' invisible opacity-0') +
                  ' z-40 absolute bottom-10 -left-10 bg-white shadow-xl transition-all duration-200 text-center'
                }>
                <div className='p-2 mt-1 w-28 h-28'>
                  {qrCodeShow && <QrCode value={CONTACT_WEHCHAT_PUBLIC} />}
                </div>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
export default SocialButton
