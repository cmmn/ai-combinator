import { UseCase } from 'types'

export const useCases: UseCase[] = [
  {
    id: 'mcq-multiplication',
    title: 'Multiple Choice Questions',
    description: 'Generate educational MCQs for multiplication tables',
    category: 'Education',
    instructionsFile: '01-mcq-multiplication-instructions.txt',
    contentFile: '01-mcq-multiplication-content.txt',
    icon: '🧮',
    complexity: 'Easy',
    estimatedTime: '30-60s'
  },
  {
    id: 'email-response',
    title: 'Professional Email Response',
    description: 'Generate professional email replies based on context',
    category: 'Communication',
    instructionsFile: '02-email-response-instructions.txt',
    contentFile: '02-email-response-content.txt',
    icon: '✉️',
    complexity: 'Medium',
    estimatedTime: '45-90s'
  },
  {
    id: 'product-description',
    title: 'Product Description',
    description: 'Create compelling e-commerce product descriptions',
    category: 'Content',
    instructionsFile: '03-product-description-instructions.txt',
    contentFile: '03-product-description-content.txt',
    icon: '🛍️',
    complexity: 'Medium',
    estimatedTime: '60-120s'
  },
  {
    id: 'meeting-summary',
    title: 'Meeting Summary',
    description: 'Transform meeting transcripts into actionable summaries',
    category: 'Business',
    instructionsFile: '04-meeting-summary-instructions.txt',
    contentFile: '04-meeting-summary-content.txt',
    icon: '📋',
    complexity: 'Hard',
    estimatedTime: '90-180s'
  },
  {
    id: 'survey-analysis',
    title: 'Survey Analysis',
    description: 'Analyze open-ended survey responses for insights',
    category: 'Research',
    instructionsFile: '05-survey-analysis-instructions.txt',
    contentFile: '05-survey-analysis-content.txt',
    icon: '📊',
    complexity: 'Hard',
    estimatedTime: '120-240s'
  }
]

export const categories = Array.from(new Set(useCases.map(uc => uc.category)))