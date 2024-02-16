import { api } from '@shared/api'
import { AxiosRequestConfig } from 'axios'

export const getProducts = <Response = unknown>(
  url: string,
  page: number,
  pageSize: number,
  // category: number,
  config?: AxiosRequestConfig,
) => {
  return async () => {
    const response = await api.get<Response>(
      `${url}?page=${page}&per_page=${pageSize}`,
      config,
    )
    return response.data
  }
}
