import LazyImage from '@/components/LazyImage'
import Router from 'next/router'
import SocialButton from './SocialButton'
import { siteConfig } from '@/lib/config'

const InfoCard = (props) => {
  const { siteInfo } = props
  return <div id='info-card' className='py-4 card'>
    <div className='items-center justify-center'>
        <div className='hover:scale-105 transform duration-200 cursor-pointer flex justify-center' onClick={ () => { Router.push('/about') }}>
            <LazyImage src={siteInfo?.icon} className='rounded-full border-2 border-purple-600/20 dark:border-yellow-400/15 shadow-lg' width={120} alt={siteConfig('AUTHOR')}/>
         </div>
        <div className='text-xl py-2 hover:scale-105 transform duration-200 flex justify-center text-gray-800 dark:text-white font-semibold'>{siteConfig('AUTHOR')}</div>
        <div className='font-light text-gray-600 dark:text-white/80 mb-2 hover:scale-105 transform duration-200 flex justify-center'>{siteConfig('BIO')}</div>
        <SocialButton/>
    </div>
  </div>
}

export default InfoCard
