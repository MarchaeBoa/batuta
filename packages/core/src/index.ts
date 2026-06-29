/**
 * @batuta/core — regras de regência compartilhadas entre web e workers.
 */

export const BATUTA_CORE_VERSION = '0.1.0'

export type AdPlatform = 'google' | 'meta' | 'tiktok' | 'linkedin'

export const SUPPORTED_PLATFORMS: readonly AdPlatform[] = [
  'google',
  'meta',
  'tiktok',
  'linkedin',
] as const

export function isSupportedPlatform(value: string): value is AdPlatform {
  return (SUPPORTED_PLATFORMS as readonly string[]).includes(value)
}
