import { useQuery } from '@tanstack/react-query'
import { fetchCurrencies } from '../../services/useCurrencies'
import { ApiResponse } from '../../interfaces/currencies'

export const useCurrenciesQuery = () => {
  return useQuery<ApiResponse, Error>({
    queryKey: ['currencies'],
    queryFn: fetchCurrencies,
    staleTime: 10000
  })
}
