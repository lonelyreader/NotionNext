
export default function GlassButton({ as: Tag = 'button', className = '', children, ...props }) {
  return (
    <Tag
      className={[
        'glass rounded-xl px-4 py-2',
        'shadow-glass',
        'transition-colors-transform duration-200',
        'hover:bg-white/12 active:scale-[0.99]',
        'text-white/90 hover:text-white',
        'focus-visible:ring-2 ring-brand-600/60',
        className
      ].join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}
