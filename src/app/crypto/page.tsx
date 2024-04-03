import { UserNav } from '@/components/pages/tasks/components/user-nav'
import { Suspense } from 'react'
import { SkeletonTable } from '@/components/pages/tasks/components/skeleton-section'
import { CryptoTable } from './table-section'

export default function CurrencyPage() {
  return (
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
  )
}
