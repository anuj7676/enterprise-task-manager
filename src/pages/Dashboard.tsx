import { useDispatch } from 'react-redux'
import MainLayout from '../components/layout/MainLayout'
import Button from '../components/ui/Button'
import { logoutUser } from '../features/auth/services/authService'
import { logout } from '../features/auth/store/authSlice'

export default function DashboardPage() {
  const dispatch = useDispatch()
  const handleLogout = async () => {
    try {
      await logoutUser()
      dispatch(logout())
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <MainLayout>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-semibold'>Dashbaord</h2>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </MainLayout>
  )
}
