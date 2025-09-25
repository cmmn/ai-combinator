'use client'

import { YStack, XStack, Text, H1, Button, TextArea, useMedia } from 'tamagui'
import { useCases, categories } from '../lib/useCases'
import { UseCase } from 'types'

interface UseCaseSelectionProps {
  selectedUseCase: UseCase | null
  selectedCategory: string | null
  customMode: boolean
  instructions: string
  content: string
  loading: boolean
  onUseCaseSelect: (useCase: UseCase) => void
  onCustomMode: () => void
  onInstructionsChange: (instructions: string) => void
  onContentChange: (content: string) => void
  onCategoryChange: (category: string | null) => void
  onContinue: () => void
  onBack: () => void
}

export function UseCaseSelection({
  selectedUseCase,
  selectedCategory,
  customMode,
  instructions,
  content,
  loading,
  onUseCaseSelect,
  onCustomMode,
  onInstructionsChange,
  onContentChange,
  onCategoryChange,
  onContinue,
  onBack,
}: UseCaseSelectionProps) {
  const media = useMedia()

  const filteredUseCases = selectedCategory
    ? useCases.filter(uc => uc.category === selectedCategory)
    : useCases

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Easy': return '$green9'
      case 'Medium': return '$orange9'
      case 'Hard': return '$red9'
      default: return '$blue9'
    }
  }

  const canContinue = instructions.trim() && content.trim()

  return (
    <YStack
      gap="$5"
      ai="center"
      p="$6"
      maxWidth={media.gtXs ? 1000 : '100%'}
      width="100%"
    >
      <H1 color="$color" textAlign="center">
        Choose Use Case & Content
      </H1>

      <Text color="$color" textAlign="center" fontSize="$4">
        Select a pre-built scenario or create your own
      </Text>

      {/* Mode Selection */}
      <XStack gap="$3" ai="center">
        <Button
          size="$4"
          theme={!customMode ? "active" : undefined}
          onPress={() => onCategoryChange(null)}
          disabled={loading}
        >
          Pre-built Use Cases
        </Button>
        <Button
          size="$4"
          theme={customMode ? "active" : undefined}
          onPress={onCustomMode}
        >
          Custom Instructions
        </Button>
      </XStack>

      {!customMode && (
        <>
          {/* Category Filter */}
          <XStack gap="$2" flexWrap="wrap" jc="center">
            <Button
              size="$3"
              theme={selectedCategory === null ? "active" : undefined}
              onPress={() => onCategoryChange(null)}
              borderRadius="$10"
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                size="$3"
                theme={selectedCategory === category ? "active" : undefined}
                onPress={() => onCategoryChange(category)}
                borderRadius="$10"
              >
                {category}
              </Button>
            ))}
          </XStack>

          {/* Use Cases Grid */}
          <YStack gap="$3" maxHeight={300} overflow="scroll" width="100%">
            {filteredUseCases.map((useCase) => (
              <Button
                key={useCase.id}
                onPress={() => onUseCaseSelect(useCase)}
                theme={selectedUseCase?.id === useCase.id ? "active" : undefined}
                padding="$4"
                height="auto"
                justifyContent="flex-start"
                borderWidth={2}
                borderColor={selectedUseCase?.id === useCase.id ? "$color" : "$borderColor"}
                disabled={loading}
              >
                <YStack gap="$2" ai="flex-start" width="100%">
                  <XStack ai="center" gap="$3" width="100%">
                    <Text fontSize="$6">{useCase.icon}</Text>
                    <YStack flex={1} ai="flex-start" gap="$1">
                      <Text fontSize="$5" fontWeight="600" color="$color">
                        {useCase.title}
                      </Text>
                      <Text fontSize="$3" color="$color075" textAlign="left">
                        {useCase.description}
                      </Text>
                    </YStack>
                  </XStack>

                  <XStack gap="$2" ai="center">
                    <Text
                      fontSize="$2"
                      backgroundColor={getComplexityColor(useCase.complexity)}
                      color="white"
                      paddingHorizontal="$2"
                      paddingVertical="$1"
                      borderRadius="$2"
                    >
                      {useCase.complexity}
                    </Text>
                    <Text
                      fontSize="$2"
                      backgroundColor="$color3"
                      color="$color"
                      paddingHorizontal="$2"
                      paddingVertical="$1"
                      borderRadius="$2"
                    >
                      {useCase.category}
                    </Text>
                    <Text
                      fontSize="$2"
                      backgroundColor="$color2"
                      color="$color"
                      paddingHorizontal="$2"
                      paddingVertical="$1"
                      borderRadius="$2"
                    >
                      {useCase.estimatedTime}
                    </Text>
                  </XStack>
                </YStack>
              </Button>
            ))}
          </YStack>
        </>
      )}

      {/* Content Preview/Edit */}
      <YStack gap="$4" width="100%">
        <Text fontSize="$5" fontWeight="600" color="$color">
          {customMode ? 'Create Custom Instructions' : 'Instructions & Content'}
          {loading && ' (Loading...)'}
        </Text>

        <YStack gap="$3">
          <YStack gap="$2">
            <Text fontSize="$4" fontWeight="600" color="$color">
              System Instructions:
            </Text>
            <TextArea
              placeholder="Enter the instructions for the AI..."
              value={instructions}
              onChangeText={onInstructionsChange}
              minHeight={120}
              disabled={loading || (!customMode && !selectedUseCase)}
            />
          </YStack>

          <YStack gap="$2">
            <Text fontSize="$4" fontWeight="600" color="$color">
              Content to Process:
            </Text>
            <TextArea
              placeholder="Enter the content to be analyzed/processed..."
              value={content}
              onChangeText={onContentChange}
              minHeight={120}
              disabled={loading || (!customMode && !selectedUseCase)}
            />
          </YStack>
        </YStack>
      </YStack>

      {/* Navigation Buttons */}
      <XStack width="100%" ai="center" jc="space-between">
        <Button
          size="$4"
          theme="alt2"
          onPress={onBack}
          fontWeight="600"
        >
          ← Back to Models
        </Button>

        <Button
          size="$4"
          theme="active"
          onPress={onContinue}
          disabled={!canContinue || loading}
          fontWeight="700"
          minWidth={150}
          opacity={!canContinue ? 0.5 : 1}
        >
          {loading ? 'Loading...' : 'CONTINUE'}
        </Button>
      </XStack>
    </YStack>
  )
}