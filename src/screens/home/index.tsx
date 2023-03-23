import React from 'react'
import SafeAreaScreen from '~components/SafeAreaScreen'
import PendingAccount from './pendingAccountView'

export default function Home() {
  return (
    <SafeAreaScreen style={{paddingHorizontal: 0}}>
      <PendingAccount />
    </SafeAreaScreen>
  )
}