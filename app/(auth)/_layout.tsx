import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function AuthLayout() {

  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return null
  }

  if (isSignedIn) {
    return <Redirect href={'/(index)'} />
  }

  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerTitle: 'Sign In Screen' }} />
        <Stack.Screen name='sign-up' options={{ headerTitle: 'Sign Up Screen' }} />
        <Stack.Screen name='reset-password' options={{ headerTitle: 'Reset Password Screen' }} />
    </Stack>
  )
}