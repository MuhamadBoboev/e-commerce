import { api } from '@shared/api'
import { AxiosRequestConfig } from 'axios'

export const getProduct = <Response = unknown>(
  url: string,
  slug?: string,
  config?: AxiosRequestConfig,
) => {
  return async () => {
    const response = await api.get<Response>(`${url}/${slug}`, config)
    return response.data
  }
}
