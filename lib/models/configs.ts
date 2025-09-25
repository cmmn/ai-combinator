import { ModelKey } from "types"

// Model configuration array
export const modelConfigs = {
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

export const allModels = Object.keys(modelConfigs) as ModelKey[]