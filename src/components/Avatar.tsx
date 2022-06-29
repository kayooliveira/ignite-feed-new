import classNames from 'classnames'
import React from 'react'

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  withBorder?: boolean
}

export function Avatar({ src, withBorder, ...rest }: AvatarProps) {
  return (
    <img
      src={src}
      {...rest}
      className={classNames('w-16 rounded-lg ' + rest.className, {
        'border-2 border-brand-pink bg-brand-gray-2 p-1 outline-brand-pink':
          withBorder
      })}
    />
  )
}
