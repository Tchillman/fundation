"use client"

import Image from "next/image";
import Link from "next/link"
import { useState } from "react"
import {
  ChevronIcon,
  CloseIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
} from "@/components/icons"

const menu = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/#sobre" },
  {
    label: "Causas e Projectos",
    href: "/#projectos",
    children: [
      { label: "Projecto SAD", href: "/#sad" },
      { label: "Espaço Osãi", href: "/#espaco-osai" },
      { label: "Fórum Científico", href: "/#forum-cientifico" },
    ],
  },
  { label: "Impacto", href: "/#impacto" },
  { label: "Notícias e Relatórios", href: "#noticias" },
] as const

const actions = [
  {
    label: "Fazer uma Doação",
    href: "/doacoes",
    className: "bg-osai-orange text-white hover:bg-osai-wine",
  },
  {
    label: "Ser Voluntário",
    href: "/voluntariado",
    className:
      "border border-osai-wine text-osai-wine hover:bg-osai-wine hover:text-white",
  },
] as const

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_8px_30px_rgb(84_1_1/0.08)]">
      <div className="bg-osai-wine text-white">
        <div className="site-container flex min-h-9 items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6">
            <Link
              className="hidden items-center gap-2 hover:text-osai-orange sm:flex"
              href="mailto:info@osai.ao"
            >
              <MailIcon className="size-4" />
              info@osai.ao
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-osai-orange"
              href="tel:+244933057707"
            >
              <PhoneIcon className="size-4" />
              (+244 933 057 707)
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">
              Saúde mental e apoio social em Angola
            </span>
            <Link
              className="bg-osai-gold px-3 py-1 font-bold text-black hover:bg-osai-orange rounded-sm"
              href="#contactos"
            >
              Apoio / Contacto
            </Link>
            <span>PT</span>
          </div>
        </div>
      </div>

      <div className="site-container flex h-20.5 items-center justify-between gap-6">
        <Link aria-label="Associação Osãi — página inicial" href="/">
          <Image
            alt="Associação Osãi"
            className="h-auto w-33"
            height={119}
            priority
            src="/images/logo.png"
            width={153}
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden xl:block">
          <ul className="flex items-center">
            {menu.map((item) => (
              <li className="group relative" key={item.label}>
                <Link
                  className="flex items-center gap-1 px-3 py-7 text-xs font-semibold uppercase tracking-wide text-osai-ink hover:text-osai-orange"
                  href={item.href}
                >
                  {item.label}
                  {"children" in item ? (
                    <ChevronIcon className="size-3" />
                  ) : null}
                </Link>
                {"children" in item ? (
                  <ul className="invisible absolute left-0 top-full w-52 translate-y-2 border-t-2 border-osai-orange bg-white py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          className="block px-5 py-2.5 text-sm text-black hover:text-osai-orange"
                          href={child.href}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li className="ml-2 border-l border-osai-line pl-5">
              <SearchIcon className="size-5 text-black" />
            </li>
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          {actions.map((action) => (
            <Link
              className={`rounded-full px-4 py-2.5 text-xs font-bold uppercase ${action.className}`}
              href={action.href}
              key={action.label}
            >
              {action.label}
            </Link>
          ))}
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="grid size-11 place-items-center text-osai-wine xl:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? (
            <CloseIcon className="size-7" />
          ) : (
            <MenuIcon className="size-7" />
          )}
        </button>
      </div>

      {isOpen ? (
        <nav
          aria-label="Navegação móvel"
          className="absolute inset-x-0 top-full border-t border-osai-line bg-white px-5 pb-6 shadow-xl xl:hidden"
        >
          <ul>
            {menu.map((item) => (
              <li className="border-b border-osai-line" key={item.label}>
                <Link
                  className="block py-3.5 text-sm font-medium uppercase text-osai-ink"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-2 md:hidden">
            {actions.map((action) => (
              <Link
                className={`rounded-full px-4 py-3 text-center text-xs font-bold uppercase ${action.className}`}
                href={action.href}
                key={action.label}
                onClick={() => setIsOpen(false)}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
