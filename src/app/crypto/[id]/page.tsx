'use client'
import React, { useState } from 'react'
import CryptoChart from './chart'
import { useCurrencyDetailQuery } from '@/hooks/useQuery/useCurrencieDetail'

export default function Page({ params }: { params: { id: string } }) {
  const [interval, setInterval] = useState('d1')

  const {
    data: cryptoData,
    isLoading,
    error
  } = useCurrencyDetailQuery(params.id)

  return (
    <div>
      <h2>{cryptoData?.data?.id}</h2>
      Time interval:
      <select value={interval} onChange={(e) => setInterval(e.target.value)}>
        <option value='m1'>1 minuto</option>
        <option value='m5'>5 minutos</option>
        <option value='h1'>1 hora</option>
        <option value='h2'>2 horas</option>
        <option value='h6'>6 horas</option>
        <option value='d1'>1 dia</option>
      </select>
      <CryptoChart cryptoId={params.id} interval={interval} />
    </div>
  )
}
