import React from 'react'
import { twMerge } from 'tailwind-merge'

function Container({ className, children }) {
  return (
    <div className={twMerge('mx-auto max-w-[900px] px-6',className)}>{children}</div>
  )
}

export default Container