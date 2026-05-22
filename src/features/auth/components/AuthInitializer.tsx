import type { ReactNode } from 'react'
import { useRestoreSession } from '../hooks/useRestoreSession'

type Props = {
  children: ReactNode
}

export default function AuthInitializer({ children }: Props) {
  useRestoreSession()
  return <>{children}</>
}
