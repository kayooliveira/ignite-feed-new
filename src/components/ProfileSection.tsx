import { PencilSimpleLine } from 'phosphor-react'
import React from 'react'

import { Avatar } from './Avatar'

export function ProfileSection() {
  return (
    <aside className="mx-auto flex h-fit w-5/6 flex-col gap-3 overflow-hidden rounded-lg bg-brand-gray-2 md:gap-6 lg:w-64">
      <div>
        <div className="h-20 max-h-20 w-full bg-profile bg-cover bg-center bg-no-repeat"></div>
        <Avatar
          src="https://github.com/kayooliveira.png"
          alt="avatar do usuário"
          withBorder
          className="relative mx-auto -mt-8"
        />
      </div>
      <div className="text-center leading-relaxed">
        <p className="text-sm font-bold md:text-base">Kayo Oliveira</p>
        <span className="mb-3 block text-xs text-brand-gray-5 md:mb-6 md:text-sm">
          Web Developer
        </span>
        <hr className="border-brand-gray-3" />
      </div>
      <button className="mx-auto mb-3 flex items-center gap-2 rounded-lg border-2 border-brand-pink bg-transparent px-6 py-4 text-sm font-bold text-brand-pink transition-colors hover:bg-brand-pink hover:text-brand-white md:mb-6 md:text-base">
        <PencilSimpleLine weight="bold" size="20" /> Editar seu perfil
      </button>
    </aside>
  )
}
