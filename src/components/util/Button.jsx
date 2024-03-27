import React from 'react'

const Button = ({children, type, className, ...props}) => {
  return (
    <button {...props} type={type} className={`btn-lg btn-active btn-secondary rounded-lg px-10 py-2 hover:bg-transparent font-medium text-xl transition-all ${className}`}>{children}</button>
  )
}

export default Button