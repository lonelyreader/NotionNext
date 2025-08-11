import { useGlobal } from '@/lib/global'
import GlassButton from '@/components/ui/GlassButton'
import { useGitBookGlobal } from '..'

export default function BottomNav ({ children }) {
  const { locale, showTocButton, togglePageNavVisible, toggleToc } = useGitBookGlobal()
  return (
    <div
      id='bottom-nav'
      className='md:hidden sticky bottom-0 z-30 p-2'>
      <div className='glass rounded-2xl mx-3 mb-3 p-2 shadow-glass'>
        <div
          className={`grid h-full max-w-lg mx-auto font-medium ${showTocButton ? 'grid-cols-2 gap-2' : 'grid-cols-1'}`}>
          <GlassButton
            onClick={togglePageNavVisible}
            className='inline-flex flex-col items-center justify-center px-3 py-2'>
            <i className='fa-book fas w-5 h-5 mb-2 text-white/80' />
            <span className='text-sm text-white/80'>
              {locale.COMMON.ARTICLE_LIST}
            </span>
          </GlassButton>

          {showTocButton && (
            <GlassButton
              onClick={toggleToc}
              className='inline-flex flex-col items-center justify-center px-3 py-2'>
              <i className='fa-list-ol fas w-5 h-5 mb-2 text-white/80' />
              <span className='text-sm text-white/80'>
                {locale.COMMON.TABLE_OF_CONTENTS}
              </span>
            </GlassButton>
          )}
        </div>
      </div>
    </div>
  )
}