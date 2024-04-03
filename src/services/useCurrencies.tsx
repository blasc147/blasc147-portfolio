// services/api.js
import {
  ApiDetailResponse,
  ApiResponse,
  CryptoHistoryResponse
} from '../interfaces/currencies'

export const fetchCurrencies = async (): Promise<ApiResponse> => {
  const response = await fetch('https://api.coincap.io/v2/assets')
  if (!response.ok) {
    throw new Error('Error getting currencies')
  }
  return response.json()
}

export const fetchCurrencyDetail = async (
  id: string
): Promise<ApiDetailResponse> => {
  const response = await fetch(`https://api.coincap.io/v2/assets/${id}`)
  if (!response.ok) {
    throw new Error('Error getting currency detail')
  }
  return response.json()
}

export const fetchCurrencyHistory = async (
  id: string,
  interval: string
): Promise<CryptoHistoryResponse> => {
  const response = await fetch(
    `https://api.coincap.io/v2/assets/${id}/history?interval=${interval}`
  )
  if (!response.ok) {
    throw new Error('History error')
  }
  return response.json()
}
