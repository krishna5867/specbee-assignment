import React from 'react'
import { Threads, Twitter, Linkedin } from './assets/icons'

const SocailIcons = () => {
  return (
    <div className='flex items-center gap-x-4'>
        <Threads />
        <Twitter />
        <Linkedin />
    </div>
  )
}

export default SocailIcons