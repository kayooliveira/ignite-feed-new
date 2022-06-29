import { format, formatDistanceToNow, formatISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ThumbsUp, Trash } from 'phosphor-react'
import React from 'react'

import { Avatar } from './Avatar'

interface CommentProps {
  id: number
  content: string
  author: {
    name: string
    avatarURL: string
  }
  likes: number
  date: Date
}

export function Comment(comment: CommentProps) {
  const commentDateFromNow = formatDistanceToNow(comment.date, {
    locale: ptBR,
    addSuffix: true
  })
  const commentFormatted = format(comment.date, "d' de 'LLL' às 'HH:m'h'", {
    locale: ptBR
  })
  const commentFormattedISO = formatISO(comment.date)

  return (
    <div className="mb-8 flex gap-4">
      <Avatar
        src={comment.author.avatarURL}
        alt="avatar do autor do comentário"
        className="hidden h-16 w-16 md:block"
      />
      <div className="relative flex w-full flex-col rounded-lg bg-brand-gray-3 p-4">
        <header className="flex w-full justify-between ">
          <div className="flex gap-4">
            <Avatar
              src={comment.author.avatarURL}
              alt="avatar do autor do comentário"
              className="block w-12 md:hidden md:w-auto"
            />
            <div className="flex flex-col">
              <p className="text-gray-7 text-sm font-bold">
                {comment.author.name}
              </p>
              <time
                className="text-xs text-brand-gray-5"
                dateTime={commentFormattedISO}
                title={commentFormatted}
              >
                {commentDateFromNow}
              </time>
            </div>
          </div>
          <Trash weight="bold" size="24" />
        </header>
        <p className="mt-4 text-sm">{comment.content}</p>
        <span className="absolute -bottom-8 flex items-center gap-2 font-bold">
          <ThumbsUp weight="bold" size="20" /> Aplaudir • {comment.likes}
        </span>
      </div>
    </div>
  )
}
