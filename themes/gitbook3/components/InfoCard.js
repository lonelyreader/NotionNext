import LazyImage from '@/components/LazyImage'
import Router from 'next/router'
import { siteConfig } from '@/lib/config'

const InfoCard = (props) => {
  const { siteInfo } = props
  return <div id='info-card' className='author-card'>
    <div className='author-card-content'>
        <div className='author-avatar' onClick={ () => { Router.push('/about') }}>
            <LazyImage src={siteInfo?.icon} className='author-avatar-img' width={60} alt={siteConfig('AUTHOR')}/>
         </div>
        <div className='author-info'>
          <div className='author-name'>{siteConfig('AUTHOR')}</div>
          <div className='author-bio'>{siteConfig('BIO')}</div>
        </div>
        <div className='author-social'>
          {/* SocialButton removed */}
        </div>
    </div>
  </div>
}

export default InfoCard
