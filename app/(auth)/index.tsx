import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isError, setIsError] = React.useState<Error | null>(null)


  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-4xl mb-4 w-80'>Sign in</Text>
      <TextInput
        className='w-80 p-2 border border-gray-300 rounded-md mb-2 placeholder:text-gray-400'
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      <TextInput
        className='w-80 p-2 border border-gray-300 rounded-md mb-2 placeholder:text-gray-400'
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />

      {isError && 
        <Text className='text-red-500 text-left w-80'>{isError.message}</Text>
      }
      
      <Pressable className='w-80 p-2 bg-blue-500 text-white rounded-md my-2' >
        <Text className='text-center text-white py-1'>Continue</Text>
      </Pressable>

      <Text className='text-gray-500'>--- or ---</Text>

      <Pressable className='w-80 p-2 rounded-md border border-black my-2'>
        <Text className='text-center text-black py-1'>Sign in with Google</Text>
      </Pressable>

    </View>
  )
}