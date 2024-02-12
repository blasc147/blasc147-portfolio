'use client'
import { z } from 'zod'
import { UserNav } from '@/components/pages/tasks/components/user-nav'
import { DataTable } from '@/components/pages/tasks/components/data-table'
import { columns } from '@/components/pages/tasks/components/columns'
import { useCurrenciesQuery } from '@/hooks/useQuery/useCurrenciesQuery'

export default function CurrencyPage() {
  const { data: cryptoData, isLoading, error } = useCurrenciesQuery()

  if (isLoading) return <div>Loading table...</div>
  if (error) return <div>Error: {error.message}</div>

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
        <DataTable data={cryptoData?.data ?? []} columns={columns} />
      </div>
    </div>
  )
}
