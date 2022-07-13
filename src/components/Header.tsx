import React from 'react'

interface HeaderProps{
    label?: string
    children? :JSX.Element
}

const Header = ({label="Counter",children}:HeaderProps) => {
    return (
      <>
            <h1>{label}</h1>
            <div>{children }</div>
            </>
  )
}

export default Header