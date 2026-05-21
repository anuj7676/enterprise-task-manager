import { Routes, Route } from 'react-router-dom'

function Dashboard() {
  return <h1>Dashboard</h1>
}

function Login() {
  return <h1>Login</h1>
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}
