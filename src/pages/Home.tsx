import React, { useState } from 'react'

import { Header } from '../components/Header'
import { Post } from '../components/Post'
import { ProfileSection } from '../components/ProfileSection'

export function Home() {
  const [posts] = useState([
    {
      id: 1,
      author: {
        name: 'Marcos Almeida',
        avatarURL: 'https://github.com/marcos.png',
        job: 'Software Engineer'
      },
      content: `
        Lorem ipsum dolor 💜🎨 sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tenetur pariatur eum similique sed aspernatur. Tempore sunt tenetur quae tempora ullam blanditiis cum dolorum laboriosam! Ni💠hil maiores ipsa maxime pariatur. Excepturi amet dicta voluptas quaerat. Iste repudiandae quibusdam saepe reprehenderit cum tenetur alias autem beatae, ex totam quasi harum aspernatur et hic maiores voluptatum, rerum odit minus optio deserunt, voluptatem💚 deleniti dolorum tempora. Esse architecto blanditiis, exercitationem labore recusandae cum tempora tenetur numquam voluptate! Maiores tenetur quam porro, beatae rerum, officia ullam velit quisquam laboriosam, animi alias laudantium eligendi ratione?
      `,
      date: new Date('2022-01-01 00:00:00'),
      comments: []
    },
    {
      id: 2,
      author: {
        name: 'Kayo Oliveira',
        avatarURL: 'https://github.com/kayooliveira.png',
        job: 'Web Developer'
      },
      content: `
        Lorem ipsum dolor 💜🎨 sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tenetur pariatur eum similique sed aspernatur. Tempore sunt tenetur quae tempora ullam blanditiis cum dolorum laboriosam! Ni💠hil maiores ipsa maxime pariatur. Excepturi amet dicta voluptas quaerat. Iste repudiandae quibusdam saepe reprehenderit cum tenetur alias autem beatae, ex totam quasi harum aspernatur et hic maiores voluptatum, rerum odit minus optio deserunt, voluptatem💚 deleniti dolorum tempora. Esse architecto blanditiis, exercitationem labore recusandae cum tempora tenetur numquam voluptate! Maiores tenetur quam porro, beatae rerum, officia ullam velit quisquam laboriosam, animi alias laudantium eligendi ratione?
      `,
      date: new Date('2019-01-01 00:00:00'),
      comments: []
    },
    {
      id: 3,
      author: {
        name: 'Francisco da Silva',
        avatarURL: 'https://github.com/francis.png',
        job: 'Software Engineer'
      },
      content: `
        Lorem ipsum dolor 💜🎨 sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tenetur pariatur eum similique sed aspernatur. Tempore sunt tenetur quae tempora ullam blanditiis cum dolorum laboriosam! Ni💠hil maiores ipsa maxime pariatur. Excepturi amet dicta voluptas quaerat. Iste repudiandae quibusdam saepe reprehenderit cum tenetur alias autem beatae, ex totam quasi harum aspernatur et hic maiores voluptatum, rerum odit minus optio deserunt, voluptatem💚 deleniti dolorum tempora. Esse architecto blanditiis, exercitationem labore recusandae cum tempora tenetur numquam voluptate! Maiores tenetur quam porro, beatae rerum, officia ullam velit quisquam laboriosam, animi alias laudantium eligendi ratione?
      `,
      date: new Date('2019-01-01 00:00:00'),
      comments: [
        {
          id: 1,
          content: 'Muito bom,parabéns!',
          author: {
            name: 'João da Silva',
            avatarURL: 'https://github.com/facebook.png'
          },
          likes: 10,
          date: new Date('2022-01-01 00:00:00')
        },
        {
          id: 1,
          content: 'Parabéns, muito bom!',
          author: {
            name: 'João da Silva',
            avatarURL: 'https://github.com/facebook.png'
          },
          likes: 33,
          date: new Date('2022-01-01 00:00:00')
        }
      ]
    }
  ])

  return (
    <>
      <Header />
      <div className="lg: mt-8 flex flex-col gap-8 px-4 lg:mx-auto  lg:max-w-[1200px] lg:flex-row">
        <ProfileSection />
        <main className="flex flex-1 flex-col gap-4 md:gap-8">
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </>
  )
}
