import Image from "next/image"
import Link from "next/link"
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons"

const columns = [
  {
    title: "Osãi",
    links: [
      ["Sobre Nós", "#sobre"],
      ["Contacto", "#contactos"],
    ],
  },
  {
    title: "Links",
    links: [
      ["Ser Voluntario", "/voluntariado"],
      ["Fazer Doação", "/doacoes"],
      ["Galeria", "#programas"],
    ],
  },

  {
    title: "Suporte",
    links: [["Documentação", "#contactos"]],
  },
] as const

export function Footer() {
  return (
    <footer id="contactos">
      <div className="bg-osai-wine py-16 text-white">
        <div className="site-container grid gap-10 md:grid-cols-2 lg:grid-cols-[1.7fr_repeat(4,1fr)]">
          <div>
            <Image
              alt="Associação Osãi"
              className="mb-6 h-auto w-36 brightness-0 invert"
              height={112}
              src="/images/logo.png"
              width={144}
            />
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <PhoneIcon className="mt-1 size-4 shrink-0 text-osai-orange" />
                222 393 950 | 933 057 707
              </li>
              <li className="flex gap-3">
                <PinIcon className="mt-1 size-4 shrink-0 text-osai-orange" />
                Edificio Corib, 3º Andar, Rua da Karipande nº 51/53
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-1 size-4 shrink-0 text-osai-orange" />
                info@osai.ao
              </li>
            </ul>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="mb-5 font-display text-lg font-semibold text-white">
                {column.title}
              </h2>
              <ul className="space-y-2 text-sm">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link className="hover:text-osai-orange" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-osai-copyright py-5 text-center text-sm text-[#707070]">
        <div className="site-container flex flex-col items-center justify-between gap-2 sm:flex-row">
          <span>© 2026 Copyright — Todos os direitos reservados.</span>
         
        </div>
      </div>
    </footer>
  )
}
