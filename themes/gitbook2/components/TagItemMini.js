import SmartLink from '@/components/SmartLink'

const TagItemMini = ({ tag, selected = false }) => {
  return (
    <SmartLink
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={`pill-hover cursor-pointer inline-block rounded duration-200
        mr-2 py-1 px-2 text-xs whitespace-nowrap ${
        selected ? 'active' : ''
      }`}>

      <div className='font-light dark:text-gray-400'>{selected && <i className='mr-1 fas fa-tag'/>} {tag.name + (tag.count ? `(${tag.count})` : '')} </div>

    </SmartLink>
  )
}

export default TagItemMini
