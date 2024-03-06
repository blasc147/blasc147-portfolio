'use client'

import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from './data-table-column-header'
import { Currency } from '@/interfaces/currencies'
import Link from 'next/link'

export const columns: ColumnDef<Currency>[] = [
  {
    accessorKey: 'symbol',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Symbol' />
    ),
    cell: ({ row }) => {
      const src = `https://assets.coincap.io/assets/icons/${(row?.getValue('symbol') as string)?.toLowerCase()}@2x.png`

      return <img src={src} className='h-6 w-6' alt='' />
    },
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>
          <span className='max-w-[500px] truncate font-medium'>
            <Link href={`/crypto/${row.original.id}`}>
              {' '}
              {row.getValue('name')}
            </Link>
          </span>
        </div>
      )
    }
  },
  {
    accessorKey: 'priceUsd',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Price' />
    ),
    cell: ({ row }) => {
      return <span>${parseFloat(row.getValue('priceUsd')).toFixed(2)}</span>
    }
  },

  {
    accessorKey: 'changePercent24Hr',
    header: () => <span>Change (24Hr)</span>,
    cell: ({ row }) => {
      const change = parseFloat(row.getValue('changePercent24Hr'))
      return (
        <span style={{ color: change < 0 ? 'red' : 'green' }}>
          {change.toFixed(2)}%
        </span>
      )
    }
  }
]
