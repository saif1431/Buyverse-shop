import { APP_NAME } from '@/lib/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './menu'

function Header() {
  return (
    <header className='w-full border-b'>
      <div className=' wrapper flex-between'>
<div className='flex-start'>
      <Link className='flex-start' href="/">
      <Image src='\images\logo.svg' alt= {APP_NAME} width={36} height={26} />
      <span className='ml-3 text-2xl font-bold'>{APP_NAME}</span>
      </Link>
</div>
      <Menu/>
      </div>
    </header>
  )
}

export default Header
