import SmartLink from '@/components/SmartLink'

export default function CategoryItem ({ selected, category, categoryCount }) {
  return (
    <SmartLink
      href={`/category/${category}`}
      passHref
      className={(selected
        ? 'hover:text-white dark:hover:text-white text-white '
        : 'text-gray-500 hover:text-white dark:hover:text-white') +
      ' flex text-sm items-center duration-300 cursor-pointer py-1 font-light px-2 whitespace-nowrap'}
      style={selected ? {backgroundColor: '#372E2C'} : {}}
      onMouseEnter={(e) => {
        if (!selected) {
          e.target.style.backgroundColor = '#372E2C';
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.target.style.backgroundColor = '';
        }
      }}>

      <div><i className={`mr-2 fas ${selected ? 'fa-folder-open' : 'fa-folder'}`} />{category} {categoryCount && `(${categoryCount})`}
      </div>

    </SmartLink>
  );
}
