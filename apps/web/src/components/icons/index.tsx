import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

/** Marca da Batuta — uma batuta cruzando uma nota/clave. */
export function BatutaMark(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden {...props}>
      <circle cx="9.5" cy="23" r="4" fill="currentColor" />
      <path
        d="M13.5 23V8.5L26 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 4.5 28 10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export type PlatformIconName =
  | 'google'
  | 'meta'
  | 'tiktok'
  | 'linkedin'
  | 'instagram'
  | 'x'

function Google(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M21 12.2c0-.7-.06-1.2-.18-1.8H12v3.4h5.1c-.1.85-.66 2.13-1.9 3l-.02.1 2.76 2.1.2.02C19.9 17.4 21 15 21 12.2Z"
        fill="currentColor"
      />
      <path
        d="M12 21c2.5 0 4.6-.82 6.13-2.24l-2.92-2.22c-.78.53-1.83.9-3.2.9-2.45 0-4.52-1.6-5.26-3.82l-.1.01-2.87 2.18-.04.1A9 9 0 0 0 12 21Z"
        fill="currentColor"
        opacity=".75"
      />
      <path
        d="M6.74 13.62A5.4 5.4 0 0 1 6.45 12c0-.56.1-1.1.27-1.62l-.004-.11L3.8 8.05l-.09.04A8.96 8.96 0 0 0 3 12c0 1.45.35 2.82.96 4.03l2.78-2.4Z"
        fill="currentColor"
        opacity=".55"
      />
      <path
        d="M12 6.56c1.74 0 2.9.75 3.57 1.38l2.6-2.54C16.6 3.9 14.5 3 12 3a9 9 0 0 0-8.04 4.96l2.78 2.42C7.48 8.16 9.55 6.56 12 6.56Z"
        fill="currentColor"
        opacity=".9"
      />
    </svg>
  )
}

function Meta(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M3 14.5c0-3.7 1.9-7 4.4-7 1.6 0 2.8 1.2 4.6 4 1.8-2.8 3-4 4.6-4 2.5 0 4.4 3.3 4.4 7 0 2.2-1 3.6-2.7 3.6-1.6 0-2.6-1-4.2-3.7l-.9-1.5-.3.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11.5c-1.7 2.7-2.7 3.7-4.3 3.7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  )
}

function TikTok(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M13.5 3v9.8a3.2 3.2 0 1 1-2.6-3.14"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 3.5c.5 2.4 2.2 3.9 4.5 4.1"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.5 10.5V16M7.5 7.6v.01M11 16v-3.2a1.8 1.8 0 0 1 3.6 0V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function Instagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
    </svg>
  )
}

function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const PLATFORM_ICONS: Record<PlatformIconName, (p: IconProps) => JSX.Element> = {
  google: Google,
  meta: Meta,
  tiktok: TikTok,
  linkedin: LinkedIn,
  instagram: Instagram,
  x: XIcon,
}

export function PlatformIcon({
  name,
  ...props
}: { name: PlatformIconName } & IconProps) {
  const Cmp = PLATFORM_ICONS[name]
  return <Cmp {...props} />
}
