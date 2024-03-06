import { useQuery } from '@tanstack/react-query'
import { ApiResponse } from '../../interfaces/currencies'
import { fetchCurrencies } from '@/services/useCurrencies'

export const useCurrenciesQuery = () => {
  return useQuery<ApiResponse, Error>({
    queryKey: ['currencies'],
    queryFn: () => fetchCurrencies(),
    suspense: true
    //staleTime: 5 * 1000
  })
}
