import { useQuery } from '@tanstack/react-query'
import { fetchCurrencyDetail } from '../../services/useCurrencies'
import { ApiDetailResponse } from '../../interfaces/currencies'

export const useCurrencyDetailQuery = (id: string) => {
  return useQuery<ApiDetailResponse, Error>({
    queryKey: ['currency', id],
    queryFn: () => fetchCurrencyDetail(id)
  })
}
