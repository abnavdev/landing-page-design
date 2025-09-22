import React from 'react'

type Props = {
  children?: React.ReactNode
  className?: string
}

const Header: React.FC<Props> = ({ children, className }) => {
  return (
    <header className={className}>
      {children}
    </header>
  )
}

export default Header
