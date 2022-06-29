import { format, formatDistanceToNow, formatISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import React from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

interface PostProps {
  id: number
  author: {
    name: string
    avatarURL: string
    job: string
  }
  content: string
  date: Date
  comments: {
    id: number
    content: string
    author: {
      name: string
      avatarURL: string
    }
    likes: number
    date: Date
  }[]
}

export function Post(post: PostProps) {
  const postDateFromNow = formatDistanceToNow(post.date, {
    locale: ptBR,
    addSuffix: true
  })
  const postFormatted = format(post.date, "d' de 'LLL' às 'HH:m'h'", {
    locale: ptBR
  })
  const postFormattedISO = formatISO(post.date)
  return (
    <article className="mx-auto flex w-5/6 flex-1 flex-col gap-3 rounded-lg bg-brand-gray-2 p-4 md:gap-6 md:p-10 lg:w-full">
      <header className="flex items-start justify-between gap-4">
        <div className="flex flex-shrink-0 gap-4">
          <Avatar
            src={post.author.avatarURL}
            alt="avatar do autor do post"
            withBorder
            className="w-14"
          />
          <div className="flex flex-col leading-relaxed">
            <p className="font-bold">{post.author.name}</p>
            <span className="text-xs text-brand-gray-5 md:text-sm">
              {post.author.job}
            </span>
          </div>
        </div>
        <time
          className="text-right text-xs leading-relaxed text-brand-gray-5 md:text-sm"
          dateTime={postFormattedISO}
          title={postFormatted}
        >
          Publicado {postDateFromNow}
        </time>
      </header>
      <div>
        <p className="text-sm leading-relaxed md:text-base">{post.content}</p>
      </div>
      <hr className="border-brand-gray-3" />
      <div>
        <span className="font-bold leading-relaxed">Deixe seu feedback</span>
        <div className="group">
          <textarea className="w-full resize-none rounded-lg border border-transparent bg-brand-gray px-4 py-3 focus:border-brand-pink"></textarea>
          <button className="mt-4 hidden rounded-lg bg-brand-pink px-4 py-3 transition-colors hover:bg-brand-pink-light group-focus-within:block md:px-6 md:py-4">
            Publicar
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-8">
          {post.comments.map(comment => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      </div>
    </article>
  )
}
