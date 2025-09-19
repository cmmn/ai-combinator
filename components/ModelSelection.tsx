'use client'

import { YStack, XStack, Text, H1, Button, useMedia } from 'tamagui'

type ModelKey = 'claude-sonnet-4' | 'claude-3-5-haiku' | 'grok-2' | 'grok-3' | 'grok-4' | 'mixtral-8x7b-instruct-v0-1' | 'gpt-4o' | 'gpt-4o-mini' | 'gpt-4-turbo' | 'gpt-5' | 'gpt-5-mini' | 'gpt-5-nano'

// Model configuration array
const modelConfigs = {
  'claude-sonnet-4': { displayName: 'Claude Sonnet 4', envKey: 'ANTHROPIC_API_KEY', isHostedOnHF: false, hourlyCost: 0 },
  'claude-3-5-haiku': { displayName: 'Claude 3.5 Haiku', envKey: 'ANTHROPIC_API_KEY', isHostedOnHF: false, hourlyCost: 0 },
  'grok-2': { displayName: 'Grok 2', envKey: 'XAI_API_KEY', isHostedOnHF: false, hourlyCost: 0 },
  'grok-3': { displayName: 'Grok 3', envKey: 'XAI_API_KEY', isHostedOnHF: false, hourlyCost: 0 },
  'grok-4': { displayName: 'Grok 4', envKey: 'XAI_API_KEY', isHostedOnHF: false, hourlyCost: 0 },
  'mixtral-8x7b-instruct-v0-1': { displayName: 'Mixtral 8x7B', envKey: 'HF_API_KEY', isHostedOnHF: true, hourlyCost: 5 },
  'gpt-4o': { displayName: 'GPT-4o', envKey: 'OPENAI_API_KEY', isHostedOnHF: false, hourlyCost: 0 },
  'gpt-4o-mini': { displayName: 'GPT-4o Mini', envKey: 'OPENAI_API_KEY', isHostedOnHF: false, hourlyCost: 0 },
  'gpt-4-turbo': { displayName: 'GPT-4 Turbo', envKey: 'OPENAI_API_KEY', isHostedOnHF: false, hourlyCost: 0 },
  'gpt-5': { displayName: 'GPT-5', envKey: 'OPENAI_API_KEY', isHostedOnHF: false, hourlyCost: 0 },
  'gpt-5-mini': { displayName: 'GPT-5 Mini', envKey: 'OPENAI_API_KEY', isHostedOnHF: false, hourlyCost: 0 },
  'gpt-5-nano': { displayName: 'GPT-5 Nano', envKey: 'OPENAI_API_KEY', isHostedOnHF: false, hourlyCost: 0 }
} as const

const allModels = Object.keys(modelConfigs) as ModelKey[]

interface ModelSelectionProps {
  selectedModels: ModelKey[]
  onSelectedModelsChange: (models: ModelKey[]) => void
  onContinue: () => void
  isAvailable: boolean | null
  onUnavailable: () => void
}

export function ModelSelection({ selectedModels, onSelectedModelsChange, onContinue, isAvailable, onUnavailable }: ModelSelectionProps) {
  const media = useMedia()

  const toggleModel = (modelKey: ModelKey) => {
    if (selectedModels.includes(modelKey)) {
      onSelectedModelsChange(selectedModels.filter(m => m !== modelKey))
    } else {
      onSelectedModelsChange([...selectedModels, modelKey])
    }
  }

  return (
    <YStack
      gap="$5"
      ai="center"
      p="$6"
      maxWidth={media.gtXs ? 1000 : '100%'}
      width="100%"
    >
      <H1 color="$color" textAlign="center">
        Select Models to Compare
      </H1>

      <Text color="$color" textAlign="center" fontSize="$4">
        {`Choose which AI models you'd like to compare`}
      </Text>

      {/* Model Selection Grid */}
      <XStack gap="$3" flexWrap="wrap" jc="center" w="100%">
        {allModels.map((modelKey) => {
          const config = modelConfigs[modelKey]
          const isSelected = selectedModels.includes(modelKey)

          return (
            <Button
              key={modelKey}
              onPress={() => toggleModel(modelKey)}
              theme={isSelected ? 'active' : undefined}
              size="$4"
              br="$4"
              borderWidth={2}
              borderColor={isSelected ? '$color' : '$borderColor'}
              backgroundColor={isSelected ? '$color' : '$background'}
              color={isSelected ? '$background' : '$color'}
              minWidth={200}
              fontWeight={isSelected ? '700' : '500'}
              hoverStyle={{
                backgroundColor: isSelected ? '$color' : '$backgroundHover',
                borderColor: '$colorHover'
              }}
            >
              {config.displayName}
            </Button>
          )
        })}
      </XStack>

      {/* Selected Count */}
      <Text color="$color075" fontSize="$3">
        {selectedModels.length} model{selectedModels.length !== 1 ? 's' : ''} selected
      </Text>

      {/* Continue Button */}
      <Button
        size="$5"
        theme={selectedModels.length > 0 ? "active" : undefined}
        onPress={() => {
          if (!isAvailable) {
            onUnavailable()
            return
          }
          onContinue()
        }}
        disabled={selectedModels.length === 0}
        fontWeight="700"
        minWidth={200}
        mt="$4"
        opacity={selectedModels.length === 0 ? 0.5 : 1}
        cursor={selectedModels.length === 0 ? 'not-allowed' : 'pointer'}
        disabledStyle={{
          opacity: 0.5,
          backgroundColor: '$backgroundStrong',
          borderColor: '$borderColor'
        }}
      >
        CONTINUE
      </Button>
    </YStack>
  )
}