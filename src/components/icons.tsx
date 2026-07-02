import type { SVGProps } from 'react'

/**
 * Jednotná sada line ikon (24px grid, stroke 1.5, zaoblené tahy).
 * Barva se dědí přes currentColor — ikonu obarvíš text-* utilitou.
 */
type IconProps = SVGProps<SVGSVGElement>

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function IconShieldCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3l7 2.6v5.2c0 4.6-2.9 8.1-7 10.2-4.1-2.1-7-5.6-7-10.2V5.6L12 3z" />
      <path d="M9 12l2.2 2.2L15.5 9.7" />
    </Icon>
  )
}

export function IconTruck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2.5 6.5h11v10h-11z" />
      <path d="M13.5 9.5h4l3 3.5v3.5h-7" />
      <circle cx="6.5" cy="16.5" r="1.9" />
      <circle cx="17" cy="16.5" r="1.9" />
    </Icon>
  )
}

export function IconUsers(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M15.5 5.2a3.2 3.2 0 010 5.9" />
      <path d="M17.8 14.9c1.7.7 2.7 2.4 2.7 4.6" />
    </Icon>
  )
}

export function IconMicroscope(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 21h12" />
      <path d="M9 17.5h6.5a4.5 4.5 0 001.3-8.8" />
      <path d="M9.5 3.5l4 4-4.6 4.6a2.5 2.5 0 01-3.5 0l-.5-.5a2.5 2.5 0 010-3.5L9.5 3.5z" />
      <path d="M8 17.5V21" />
    </Icon>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4.5 12.5l5 5L19.5 7" />
    </Icon>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 12h16" />
      <path d="M14 6l6 6-6 6" />
    </Icon>
  )
}

export function IconPhone(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 4h4l1.5 4.5-2.2 1.6a12 12 0 005.6 5.6l1.6-2.2L20 15v4a1.5 1.5 0 01-1.6 1.5C10.2 20 4 13.8 3.5 5.6A1.5 1.5 0 015 4z" />
    </Icon>
  )
}

export function IconBox(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M4 7.5l8 4.5 8-4.5" />
      <path d="M12 12v9" />
    </Icon>
  )
}

export function IconMapPin(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21s-6.5-5.3-6.5-10.2a6.5 6.5 0 0113 0C18.5 15.7 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </Icon>
  )
}

export function IconBulb(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.5 18h5" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 00-3.5 10.9c.8.6 1.2 1.3 1.3 2.1h4.4c.1-.8.5-1.5 1.3-2.1A6 6 0 0012 3z" />
    </Icon>
  )
}

export function IconDocument(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 3h7l4 4v14H7V3z" />
      <path d="M14 3v4h4" />
      <path d="M10 12h5M10 16h5" />
    </Icon>
  )
}

export function IconX(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Icon>
  )
}

export function IconBuilding(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 21V5.5L12 3l8 2.5V21" />
      <path d="M2.5 21h19" />
      <path d="M12 8v4M10 10h4" />
      <path d="M9 21v-4h6v4" />
    </Icon>
  )
}

export function IconStethoscope(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 3v5.5a4.5 4.5 0 009 0V3" />
      <path d="M9.5 13v3a5 5 0 0010 0v-1.6" />
      <circle cx="19.5" cy="12" r="2.4" />
    </Icon>
  )
}

export function IconPill(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-45 12 12)" />
      <path d="M8.5 8.5l7 7" />
    </Icon>
  )
}
