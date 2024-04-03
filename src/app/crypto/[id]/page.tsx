'use client'
import React, { useState } from 'react'
import CryptoChart from './chart'
import { useSession } from 'next-auth/react'

export default function Page({ params }: { params: { id: string } }) {
  const [interval, setInterval] = useState('d1')
  const { data: session, status } = useSession()

  console.log('session', session)
  console.log('status', status)

  return (
    <>
      <h2>{params.id}</h2>
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
    </>
  )
}
