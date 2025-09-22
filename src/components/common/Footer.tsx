import React from 'react'

type Props = {
  children?: React.ReactNode
  className?: string
}

const Footer: React.FC<Props> = ({ children, className }) => {
  return (
    <footer className={className}>
      {children}
    </footer>
  )
}

export default Footer
