import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'

export const MenuItemPCNormal = props => {
  const { link } = props
  const router = useRouter()
  const selected = router.pathname === link.href || router.asPath === link.href
  if (!link || !link.show) {
    return null
  }

  return (
    <SmartLink
      key={`${link.id}-${link.slug}`}
      title={link.name}
      href={link.href}
      className={
        'px-2 duration-300 text-sm justify-between dark:text-gray-300 cursor-pointer flex flex-nowrap items-center ' +
        (selected
          ? 'text-white hover:text-white'
          : '')
      }
      style={selected ? {backgroundColor: '#372E2C'} : {}}
      onMouseEnter={(e) => {
        if (!selected) {
          e.target.style.color = '#372E2C';
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.target.style.color = '';
        }
      }}>
      <div className='items-center justify-center flex '>
        <i className={link.icon} />
        <div className='ml-2 whitespace-nowrap'>{link.name}</div>
      </div>
      {link.slot}
    </SmartLink>
  )
}
