type IconProps = {
  className?: string
}

function IconBase({
  children,
  className,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      {children}
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7.5 3.8 10 8 8.2 9.8c1.2 2.4 3.6 4.8 6 6l1.8-1.8 4.2 2.5-.7 3.2c-.2.9-1.1 1.5-2 1.4C10.1 20.2 3.8 13.9 2.9 6.5c-.1-.9.5-1.8 1.4-2l3.2-.7Z" />
    </IconBase>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  )
}

export function PinIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </IconBase>
  )
}

export function ChevronIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m8 10 4 4 4-4" />
    </IconBase>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </IconBase>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </IconBase>
  )
}
