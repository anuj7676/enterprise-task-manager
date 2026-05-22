import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { refreshSession } from '../services/authService'
import { finishLoading, setCredentials } from '../store/authSlice'

export const useRestoreSession = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const response = await refreshSession()
        dispatch(setCredentials(response.user))
      } catch (error) {
        dispatch(finishLoading())
      }
    }
    restoreSession()
  }, [dispatch])
}
