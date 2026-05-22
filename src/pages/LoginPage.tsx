import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from '../components/ui/Button'
import { loginSchema } from '../features/auth/validation/loginSchema'
import type { LoginFormData } from '../features/auth/validation/loginSchema'
import { useLogin } from '../features/auth/hooks/useLogin'
import { setCredentials } from '../features/auth/store/authSlice'
import { ROUTES } from '../constants/routes'

export default function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { mutate, isPending } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) })
  const onSubmit = (data: LoginFormData) => {}
  return (
    <div className='min-h-screen flex items-center justify center bg-gray-100'>
      <div className='bg-white p-8 rounded-xl shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <input
              type='email'
              placeholder='Email'
              className='w-full border rounded-lg px-4 py-2'
              {...register('email')}
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.email.message}
              </p>
            )}
          </div>
          <input
            type='password'
            placeholder='Password'
            className='w-full border rounded-lg px-4 py-2'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.password.message}
            </p>
          )}
          <Button type='submit' className='w-full' disabled={isPending}>
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}
