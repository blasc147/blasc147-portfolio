'use client'
import { columns } from '@/components/pages/tasks/components/columns'
import { DataTable } from '@/components/pages/tasks/components/data-table'
import { useCurrenciesQuery } from '@/hooks/useQuery/useCurrenciesQuery'

export const CryptoTable = () => {
  const { data: cryptoData, error } = useCurrenciesQuery()

  return <DataTable data={cryptoData?.data ?? []} columns={columns} />
}
