// data for reading comprehension quiz
export type CompData = {
  passage: string;
  level: number;
}

export type Deck = {
  id?: number;
  createdAt?: number;
  userId: number;
  title: string;
  description: string;
  query?: string;
  isPublic?: boolean;
  challengeId?: number;
  isUpload?: boolean;
  documentText?: string; // max savable is 100_000_000 chars according to upstash
  isFolder?: boolean;
  isBook?: boolean;
  isChapter?: boolean;
  chapterIndex?: number;
  wordCount?: number;
  charCount?: number;
  compData?: CompData;
  comId?: number;
}

export type Mcq = {
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
  isHidden?: boolean;
}

export type McqsKv = { [key: number]: Mcq[] }

export type LevelData = {
  [key: number] : {
    title: string;
    description: string;
    caption: string;
    instructions: string;
  }
}


export interface KeyValues {
  [key: string]: unknown;
}



export type AiConfig = {
  chunkSize: number;
  overlap: number;
  maxChunks: number;
  minMcqs: number;
  maxRetries: number;
}

export type Envs = 'production' | 'preview' | 'requests' | 'errors' | 'logs' | 'rateLimit'

export type Model = 'claude-sonnet-4' | 'claude-3-5-haiku' | 'grok-2' | 'grok-3' | 'grok-4' | 'mixtral-8x7b-instruct-v0-1' | 'gpt-4o' | 'gpt-4o-mini' | 'gpt-4-turbo' | 'gpt-5' | 'gpt-5-mini' | 'gpt-5-nano'

export type Action = 'create' | 'update' | 'delete'

export type Target = 'mcqs' | 'deck'

export type BodyContent = {
  action: Action;
  target: Target;
  length: number;
  content: string; // e.g. "multiplication tables 0-100"
  model: Model;
}





