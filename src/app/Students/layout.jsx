import React from 'react'
import Courses from './Courses'
import { Outfit } from 'next/font/google'

const slow = Outfit({ 
    subsets: ['latin'],
    weight: ['500'] 
  })
  export const metadata = {
    title: 'Learning Next js',
    description: 'Understanding the principles of next',
  }

export default function layout({children}) {
  return (
    <div className={slow.className}>
        <div>
          {children}
        <Courses/>
        </div>
    </div>
  )
}
