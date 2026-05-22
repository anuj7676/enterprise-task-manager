import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppRoutes from './routes/AppRoutes.tsx'
import { store } from './store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthInitializer from './features/auth/components/AuthInitializer.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthInitializer>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthInitializer>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
