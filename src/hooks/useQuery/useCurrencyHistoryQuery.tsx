import { useQuery } from '@tanstack/react-query'
import { fetchCurrencyHistory } from '../../services/useCurrencies'
import { CryptoHistoryResponse } from '../../interfaces/currencies'

export const useCurrencyHistoryQuery = (cryptoId: string, interval: string) => {
  return useQuery<CryptoHistoryResponse, Error>({
    queryKey: ['currency', cryptoId],
    queryFn: () => fetchCurrencyHistory(cryptoId, interval)
  })
}
