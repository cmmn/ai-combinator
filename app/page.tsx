'use client'

import { isClient, YStack } from 'tamagui'
import { ModelController } from '../components/ModelController'
import { ComingSoon } from '../components/ComingSoon'
import { useState, useEffect } from 'react'

export default function Home() {
  const [showUnavailableModal, setShowUnavailableModal] = useState(false)
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)

  // Check if app is available
  useEffect(() => {
    if (!isClient) return
    const checkAvailability = async () => {
      try {
        const response = await fetch('/api/status')
        const data = await response.json()
        if (data.isAvailable !== 'true') {
          setIsAvailable(false)
        } else {
          setIsAvailable(true)
        }
      } catch (error) {
        console.error('Error checking app availability:', error)
        // If we can't check status, assume unavailable
        setIsAvailable(false)
      }
    }

    checkAvailability()
  }, [setIsAvailable])

  return (
    <>
      {isAvailable !== null && (
        <>
      <ComingSoon
        showUnavailableModal={showUnavailableModal}
        setShowUnavailableModal={setShowUnavailableModal}
      />
      <YStack
        theme='blue'
        mt={20}
        br={20}
        mx='auto'
        width="100%"
        padding="$10"
        gap={'$5'}
        backgroundColor="$background"
        jc='center'
        ai='center'
        ac='center'
      >
        
          <ModelController
            isAvailable={isAvailable}
            onUnavailable={() => setShowUnavailableModal(true)}
          />
      </YStack>
      </>
       )}
    </>
  )
}
