export default function Container({ children, className = '', as: Tag = 'div', wide = false }) {
  return (
    <Tag className={`mx-auto w-full ${wide ? 'max-w-7xl' : 'max-w-6xl'} px-5 sm:px-8 ${className}`}>
      {children}
    </Tag>
  )
}
