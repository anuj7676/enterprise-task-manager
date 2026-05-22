export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',

    REGISTER: '/auth/register',

    REFRESH: '/auth/refresh',

    LOGOUT: '/auth/logout',
  },
  TASKS: {
    GET_ALL: '/tasks',
    CREATE: '/tasks',
    UPDATE: (id: string) => `/tasks/${id}`,
    DELETE: (id: string) => `/tasks/${id}`,
  },
} as const
