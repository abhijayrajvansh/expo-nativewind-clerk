import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function AuthLayout() {

  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return null
  }

  if (isSignedIn) {
    return <Redirect href={'/(index)/home'} />
  }

  // /home

  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerTitle: 'Sign In Screen' }} />
    </Stack>
  )
}