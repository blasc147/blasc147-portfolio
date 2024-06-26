'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from './ui/button'

export default function ButtonAuth() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (session) {
    return (
      <>
        <Button onClick={() => signOut()} variant='ghost'>
          {' '}
          Sign out{' '}
        </Button>
      </>
    )
  }
  return (
    <>
      <Button onClick={() => signIn()} variant='primary'>
        Log in
      </Button>
    </>
  )
}
