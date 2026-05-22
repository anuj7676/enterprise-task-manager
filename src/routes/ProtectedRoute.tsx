import { Navigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

type Props = {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const { isAuthenticated, isLoading } = useSelector(
    (state: RootState) => state.auth,
  )
  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        Loading....
      </div>
    )
  }
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />
  }
  return children
}
