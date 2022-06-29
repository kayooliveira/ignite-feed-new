import React from 'react'

import { Logo } from './Logo'

export function Header() {
  return (
    <div className="flex w-full items-center justify-center gap-4 bg-brand-gray-2 p-5">
      <Logo />
      <h1 className="text-3xl font-bold leading-relaxed">Ignite Feed</h1>
    </div>
  )
}
