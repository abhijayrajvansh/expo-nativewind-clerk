import { useSSO } from '@clerk/clerk-expo'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

export default function Page() {
  const { startSSOFlow } = useSSO()

  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive: setActiveSession } = await startSSOFlow({
        strategy: 'oauth_google',
      })
      
      if (createdSessionId && setActiveSession) {
        setActiveSession({ session: createdSessionId })
      }
    } catch (error) {
      console.error('Google sign-in error:', error)
      console.log(error)
    }
  }


  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-5xl font-semibold mb-4 w-80'>Sign in</Text>
      <Pressable className='w-80 p-2 rounded-md border border-black my-2' onPress={handleGoogleSignIn}>
        <Text className='text-center text-black py-1'>Sign in with Google</Text>
      </Pressable>
    </View>
  )
}