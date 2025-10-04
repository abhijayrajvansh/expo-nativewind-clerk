import { Slot, Stack } from "expo-router";
import env from '@/env';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import "@/styles/global.css"
import { tokenCache } from '@clerk/clerk-expo/token-cache'

// checking if clerk key is defined or not
const isClerkKey = env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!isClerkKey) {
  throw new Error('EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY is not defined');
}


export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ClerkLoaded>
        <Slot />
      </ClerkLoaded>
    </ClerkProvider>
  );
}
