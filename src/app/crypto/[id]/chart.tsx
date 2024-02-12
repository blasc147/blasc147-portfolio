'use client'
import React from 'react'
import 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { useCurrencyHistoryQuery } from '@/hooks/useQuery/useCurrencyHistoryQuery'

type CryptoChartProps = {
  cryptoId: string
  interval: string
}

const CryptoChart: React.FC<CryptoChartProps> = ({ cryptoId, interval }) => {
  const {
    data: cryptoData,
    isLoading,
    error
  } = useCurrencyHistoryQuery(cryptoId, interval)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  const chartData = {
    labels: cryptoData?.data?.map((d) =>
      new Date(d.time).toLocaleString('en-GB', { timeZone: 'UTC' })
    ),
    datasets: [
      {
        label: 'Precio USD',
        data: cryptoData?.data?.map((d) => d.priceUsd),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }

  return <Line data={chartData} />
}

export default CryptoChart
