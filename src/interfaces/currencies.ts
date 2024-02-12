export interface Currency {
  id: string
  rank: string
  symbol: string
  name: string
  supply: string
  maxSupply: string | null
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr: string
}

export interface ApiResponse {
  data: Currency[]
  timestamp: number
}

export interface ApiDetailResponse {
  data: Currency
  timestamp: number
}

export interface CryptoHistoryData {
  priceUsd: string
  time: number
}

export interface CryptoHistoryResponse {
  data: CryptoHistoryData[]
  timestamp: number
}
