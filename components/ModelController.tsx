'use client'

import { useState } from 'react'
import { YStack } from 'tamagui'
import { ModelSelection } from './ModelSelection'
import { ModelComparison } from './ModelComparison'

type ModelKey = 'claude-sonnet-4' | 'claude-3-5-haiku' | 'grok-2' | 'grok-3' | 'grok-4' | 'mixtral-8x7b-instruct-v0-1' | 'gpt-4o' | 'gpt-4o-mini' | 'gpt-4-turbo' | 'gpt-5' | 'gpt-5-mini' | 'gpt-5-nano'

type ControllerStep = 'selection' | 'comparison'

interface ModelControllerProps {
  isAvailable: boolean
  onUnavailable: () => void
}

export function ModelController({ isAvailable, onUnavailable }: ModelControllerProps) {
  const [currentStep, setCurrentStep] = useState<ControllerStep>('selection')
  const [selectedModels, setSelectedModels] = useState<ModelKey[]>([])

  const handleContinue = () => {
    if (selectedModels.length > 0) {
      setCurrentStep('comparison')
    }
  }

  const handleBack = () => {
    setCurrentStep('selection')
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
          onBack={handleBack}
        />
      )}
    </YStack>
  )
}