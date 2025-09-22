import React from 'react'

type Props = {
  children?: React.ReactNode
  className?: string
}

const CTASection: React.FC<Props> = ({ children, className }) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

export default CTASection
