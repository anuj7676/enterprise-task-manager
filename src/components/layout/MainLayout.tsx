import { APP_CONFIG } from '../../constants/config'

type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-white shadow px-6 py-4'>
        <h1 className='text-xl font-bold'>{APP_CONFIG.APP_NAME}</h1>
      </header>
      <main className='p-6'>{children}</main>
    </div>
  )
}
