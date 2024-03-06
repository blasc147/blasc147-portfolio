'use client'
import { z } from 'zod'
import { UserNav } from '@/components/pages/tasks/components/user-nav'
import { DataTable } from '@/components/pages/tasks/components/data-table'
import { columns } from '@/components/pages/tasks/components/columns'
import { useCurrenciesQuery } from '@/hooks/useQuery/useCurrenciesQuery'
import { Suspense } from 'react'

// SkeletonTable.js
export const SkeletonTable = () => {
  return (
    <div className='animate-pulse'>
      <div className='rounded bg-gray-300 h-6 w-3/4 mb-4'></div>
      <div className='space-y-2'>
        {[...Array(10)].map((_, index) => (
          <div key={index} className='flex space-x-4'>
            <div className='rounded bg-gray-300 h-6 w-1/5'></div>
            <div className='rounded bg-gray-300 h-6 w-2/5'></div>
            <div className='rounded bg-gray-300 h-6 w-1/4'></div>
            <div className='rounded bg-gray-300 h-6 w-1/6'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const CryptoTable = () => {
  const { data: cryptoData, error } = useCurrenciesQuery()

  return <DataTable data={cryptoData?.data ?? []} columns={columns} />
}

export default function CurrencyPage() {
  return (
    <div className='container'>
      <div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
            <p className='text-muted-foreground'>
              Here&apos;s a list of crypto currencies!
            </p>
          </div>
          <div className='flex items-center space-x-2'>
            <UserNav />
          </div>
        </div>

        <Suspense fallback={<SkeletonTable />}>
          <CryptoTable />
        </Suspense>
      </div>
    </div>
  )
}
