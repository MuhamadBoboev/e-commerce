import axios, { AxiosError } from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})

api.interceptors.response.use(
  null,
  (error: AxiosError<{ message: string }>) => {
    if (error.code === 'ERR_NETWORK') {
      error.message = 'Проблема подключения с интернетом'
    } else {
      error.message = error.response?.data.message || 'Произошла ошибка'
    }
    return Promise.reject(error)
  },
)
