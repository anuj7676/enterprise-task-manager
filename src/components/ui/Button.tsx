import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ className, ...props }: Props) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 transition',
        className,
      )}
      {...props}
    />
  )
}
