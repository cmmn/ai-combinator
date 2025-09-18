export function getModelEnvVars() {
  return {
    'claude-sonnet': {
      apiKey: process.env.ANTHROPIC_API_KEY || '',
    },
    'grok': {
      apiKey: process.env.XAI_API_KEY || '',
    },
    'mixtral-8x7b-instruct-v0-1': {
      apiKey: process.env.HF_API_KEY || '',
      baseUrl: process.env.HF_ENDPOINT_URL || '',
    },
    'open-ai': {
      apiKey: process.env.OPENAI_API_KEY || '',
    },
  }
}