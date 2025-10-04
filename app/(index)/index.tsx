import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

export default function HomeScreen() {
  const { signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut()
      router.replace('/(auth)')
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-4xl mb-8'>Welcome Home</Text>
      
      <Pressable 
        className='bg-red-500 px-6 py-3 rounded-md'
        onPress={handleSignOut}
      >
        <Text className='text-white font-semibold'>Sign Out</Text>
      </Pressable>
    </View>
  )
}