import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Osãi – Associação Osãi",
  description:
    "Associação angolana dedicada à saúde mental, educação e apoio psicossocial.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-AO">
      <body >{children}</body>
    </html>
  )
}
