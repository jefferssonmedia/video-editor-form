import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Formulario de Edición de Video - Marca Personal",
  description: "Formulario profesional para servicios de edición de video para marcas personales",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${openSans.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily}, ${GeistSans.style.fontFamily};
  --font-sans: ${openSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-heading: ${montserrat.variable};
}
        `}</style>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
