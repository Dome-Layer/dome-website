import type { Locale } from '../locales'
import { de } from './de'
import { en } from './en'
import { it } from './it'
import { nl } from './nl'
import type { Messages } from './types'

export type { Messages, PageMetaText } from './types'

export const MESSAGES: Record<Locale, Messages> = { en, it, nl, de }
