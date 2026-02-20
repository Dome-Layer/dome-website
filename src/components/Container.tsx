import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  narrow?: boolean
}

export function Container({ children, className = '', narrow = false }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-6 sm:px-8 lg:px-12 ${narrow ? 'max-w-3xl' : 'max-w-7xl'} ${className}`}>
      {children}
    </div>
  )
}
