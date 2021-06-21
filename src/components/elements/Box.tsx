import { ReactNode } from 'react'

interface BoxProps {
  children: ReactNode
}

export function Box({ children }: BoxProps) {
  return <div>{children}</div>
}
