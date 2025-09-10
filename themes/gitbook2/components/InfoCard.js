import LazyImage from '@/components/LazyImage'
import Router from 'next/router'
import SocialButton from './SocialButton'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const InfoCard = (props) => {
  const { siteInfo } = props
  
  // 检查作者卡片是否启用
  const isAuthorCardEnabled = siteConfig('GITBOOK_AUTHOR_CARD_ENABLED', false, CONFIG)
  
  // 如果未启用，不渲染任何内容
  if (!isAuthorCardEnabled) {
    return null
  }
  
  return <div id='info-card' className='py-4'>
    <div className='items-center justify-center'>
        <div className='hover:scale-105 transform duration-200 cursor-pointer flex justify-center' onClick={ () => { Router.push('/about') }}>
            <LazyImage src={siteInfo?.icon} className='rounded-full' width={120} alt={siteConfig('AUTHOR')}/>
         </div>
        <div className='text-xl py-2 hover:scale-105 transform duration-200 flex justify-center dark:text-gray-300'>{siteConfig('AUTHOR')}</div>
        <div className='font-light text-gray-600 mb-2 hover:scale-105 transform duration-200 flex justify-center dark:text-gray-400'>{siteConfig('BIO')}</div>
        <SocialButton/>
    </div>
  </div>
}

export default InfoCard
