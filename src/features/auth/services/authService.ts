import api from '../../../services/api'
import { API_ENDPOINTS } from '../../../constants/api'

import { setAccessToken } from '../store/tokenStore'

type LoginPayload = { email: string; password: string }

export const login = async (payload: LoginPayload) => {
  const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, payload)
  const accessToken = response.data.accessToken
  setAccessToken(accessToken)
  return response.data
}

export const refreshSession = async () => {
  const response = await api.post(API_ENDPOINTS.AUTH.REFRESH)
  const accessToken = response.data.accessToken
  setAccessToken(accessToken)
  return response.data
}

export const logoutUser = async () => {
  await api.post(API_ENDPOINTS.AUTH.LOGOUT)
}
