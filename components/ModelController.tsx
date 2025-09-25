'use client'

import { useState } from 'react'
import { YStack } from 'tamagui'
import { ModelSelection } from './ModelSelection'
import { ModelComparison } from './ModelComparison'
import { UseCaseContent } from 'types'

type ModelKey = 'claude-sonnet-4' | 'claude-3-5-haiku' | 'grok-2' | 'grok-3' | 'grok-4' | 'mixtral-8x7b-instruct-v0-1' | 'gpt-4o' | 'gpt-4o-mini' | 'gpt-4-turbo' | 'gpt-5' | 'gpt-5-mini' | 'gpt-5-nano'

type ControllerStep = 'selection' | 'comparison'

export function ModelController({
  useCaseContent,
  currentStep = 'selection',
  setCurrentStep
}: {
  useCaseContent: UseCaseContent | null
  currentStep?: ControllerStep
  setCurrentStep: (step: ControllerStep) => void
}) {
  const [selectedModels, setSelectedModels] = useState<ModelKey[]>([])
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)
  
  const onUnavailable = () => {
    setIsAvailable(false)
    setTimeout(() => setIsAvailable(null), 3000)
  }

  const handleContinue = () => {
    if (selectedModels.length > 0) {
      setCurrentStep('comparison')
    }
  }



  return (
    <YStack gap="$5" ai="center">
      {currentStep === 'selection' && (
        <ModelSelection
          selectedModels={selectedModels}
          onSelectedModelsChange={setSelectedModels}
          onContinue={handleContinue}
          isAvailable={isAvailable}
          onUnavailable={onUnavailable}
        />
      )}

      {currentStep === 'comparison' && (
        <ModelComparison
          selectedModels={selectedModels}
          isAvailable={isAvailable}
          onUnavailable={onUnavailable}
          useCaseContent={useCaseContent}
        />
      )}
    </YStack>
  )
}