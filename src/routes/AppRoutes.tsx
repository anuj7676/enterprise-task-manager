import { Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/Dashboard'
import LoginPage from '../pages/LoginPage'
import ProtectedRoute from './ProtectedRoute'
import { ROUTES } from '../constants/routes'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route
        path={ROUTES.HOME}
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
