import type { Locale } from '../locales'
import { en } from './en'
import { it } from './it'
import type { Messages } from './types'

export type { Messages, PageMetaText } from './types'

export const MESSAGES: Record<Locale, Messages> = { en, it }
