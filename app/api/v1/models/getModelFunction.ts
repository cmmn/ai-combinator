import { Model } from 'types'
import { getLLMStream } from './llm-stream'

// Model configuration mapping
const modelMap = {
  'claude-sonnet-4': {
    provider: 'anthropic' as const,
    model: 'claude-sonnet-4-20250514'
  },
  'claude-3-5-haiku': {
    provider: 'anthropic' as const,
    model: 'claude-3-5-haiku-20241022'
  },
  'grok-2': {
    provider: 'xai' as const,
    model: 'grok-2'
  },
  'grok-3': {
    provider: 'xai' as const,
    model: 'grok-3'
  },
  'grok-4': {
    provider: 'xai' as const,
    model: 'grok-4'
  },
  'mixtral-8x7b-instruct-v0-1': {
    provider: 'hf' as const,
    model: 'mixtral-8x7b-instruct-v0.1'
  },
  'gpt-4o': {
    provider: 'openai' as const,
    model: 'gpt-4o'
  },
  'gpt-4o-mini': {
    provider: 'openai' as const,
    model: 'gpt-4o-mini'
  },
  'gpt-4-turbo': {
    provider: 'openai' as const,
    model: 'gpt-4-turbo'
  },
  'gpt-5': {
    provider: 'openai' as const,
    model: 'gpt-5'
  },
  'gpt-5-mini': {
    provider: 'openai' as const,
    model: 'gpt-5-mini'
  },
  'gpt-5-nano': {
    provider: 'openai' as const,
    model: 'gpt-5-nano'
  }
} as const

export async function getModelFunction({
  model,
  instructions,
  content
}: {
  model: Model
  instructions: string
  content: string
}) {
  // Get model configuration
  const config = modelMap[model]
  if (!config) {
    throw new Error(`Unknown model: ${model}`)
  }

  // Return function that creates the streaming response
  return () => getLLMStream({
    provider: config.provider,
    model: config.model,
    instructions,
    content,
  })
}