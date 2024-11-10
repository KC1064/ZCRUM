import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex items-center justify-center h-max py-10'>{children}</div>
  )
}

export default layout