'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function Page() {
  const { status, data } = useSession()

  return (
    <div>
      <button onClick={() => signOut()}>signOut</button>
      <button onClick={() => signIn('github')}>signIn</button>
      {data && JSON.stringify(data, null, 2)}
      <div className="flex flex-col"></div>
      <span>{status}</span>
      <h1>Guest Book</h1>
      <p>Leave a message</p>
    </div>
  )
}
