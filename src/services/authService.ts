import api from './api'
import { API_ENDPOINTS } from '../constants/api'

type LoginPayload = {
  email: string
  password: string
}

export const login = async (payload: LoginPayload) => {
  const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, payload)
  return response.data
}

export const refreshToken = async () => {
  const response = await api.post(API_ENDPOINTS.AUTH.REFRESH)
  return response.data
}
