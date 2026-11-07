import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MailIcon, PhoneIcon } from "@/components/icons";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  {
    value: "2 678+",
    label: "Doações mobilizadas",
    detail: "Apoios e bens essenciais",
  },
  {
    value: "156+",
    label: "Visitas às aldeias",
    detail: "Intervenções de proximidade",
  },
  {
    value: "54+",
    label: "Acompanhamentos",
    detail: "Apoio psicossocial",
  },
] as const;

const projects = [
  {
    id: "sad",
    number: "01",
    title: "Projecto SAD",
    eyebrow: "Stress · Ansiedade · Depressão",
    description:
      "Informação, avaliação e prevenção em saúde mental com orientação de profissionais. Ajudamos cada pessoa a reconhecer factores de risco e a encontrar o apoio adequado.",
    image: "/images/sad.jpg",
    alt: "Crianças numa actividade ao ar livre",
  },
  {
    id: "espaco-osai",
    number: "02",
    title: "Espaço Osãi",
    eyebrow: "Apoio mais próximo",
    description:
      "Um espaço para aproximar profissionais de saúde mental das comunidades, promover programas educativos e facilitar o acesso responsável a apoio terapêutico.",
    image: "/images/sofiana.jpg",
    alt: "Sofiana Lua Pindali Mbakassy, fundadora da Associação Osãi",
  },
  {
    id: "forum-cientifico",
    number: "03",
    title: "Fórum Científico",
    eyebrow: "Conhecimento partilhado",
    description:
      "Especialistas, instituições e comunidades reunidos para formar agentes sociais e ampliar a conversa pública sobre saúde mental em Angola.",
    image: "/images/forum.jpg",
    alt: "Formação e Fórum Científico Osãi",
  },
] as const;

const waysToHelp = [
  {
    number: "01",
    title: "Doação financeira",
    description:
      "Ajude a financiar projectos de saúde mental e intervenções comunitárias.",
    action: "Solicitar IBAN oficial",
    href: "mailto:info@osai.ao?subject=Pedido%20de%20IBAN%20oficial%20para%20doação",
    accent: "/doacoes",
  },
  {
    number: "02",
    title: "Doação de bens",
    description:
      "Entregue bens essenciais alinhados com as necessidades das famílias.",
    action: "Combinar uma entrega",
    href: "mailto:info@osai.ao?subject=Doação%20de%20bens",
    accent: "bg-osai-orange",
  },
  {
    number: "03",
    title: "Voluntariado",
    description:
      "Partilhe tempo, conhecimento profissional ou capacidade de mobilização.",
    action: "Quero participar",
    href: "/voluntariado",
    accent: "bg-osai-member",
  },
] as const;

const updates = [
  {
    type: "Transparência",
    title: "Relatórios de actividades e impacto",
    description:
      "Resultados das acções, indicadores de impacto e aplicação dos apoios recebidos.",
    image: "/images/angariacao.jpg",
    alt: "Angariação de recursos e relatórios da Associação Osãi",
    status: "Documentos em actualização",
  },
  {
    type: "Comunidade",
    title: "Projecto Ukamba",
    description:
      "Assistência psicossocial e actividades ludo-educativas junto de comunidades vulneráveis.",
    image: "/images/ukamba.jpg",
    alt: "Actividades comunitárias do Projecto Ukamba",
    status: "Conheça a iniciativa",
  },
  {
    type: "Saúde mental",
    title: "Falar também é cuidar",
    description:
      "Informação clara para reconhecer sinais de stress, ansiedade e depressão.",
    image: "/images/agentes.jpg",
    alt: "Agentes comunitários de saúde mental",
    status: "Conteúdo educativo",
  },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-osai-orange">
      <span className="h-px w-8 bg-osai-orange" />
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-osai-wine text-white">
          <div className="grid min-h-155 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex items-center px-5 py-20 lg:px-[max(40px,calc((100vw-1170px)/2))] lg:pr-16">
              <div className="max-w-2xl">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-osai-gold">
                  Associação Osãi · Angola
                </p>
                <h1 className="font-display text-[clamp(2.7rem,5vw,5rem)] font-bold leading-[1.05]">
                  Cuidar da mente é{" "}
                  <span className="text-osai-orange">transformar vidas.</span>
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
                  Levamos informação, prevenção e apoio psicossocial a jovens,
                  famílias e comunidades vulneráveis em Angola.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    className="rounded-full border border-osai-orange bg-osai-orange px-7 py-3.5 text-center text-sm font-bold uppercase text-white hover:border-white hover:bg-white hover:text-osai-wine"
                    href="/doacoes">
                    Fazer uma doação
                  </Link>
                  <Link
                    className="rounded-full border border-white/40 px-7 py-3.5 text-center text-sm font-bold uppercase text-white hover:border-white hover:bg-white hover:text-osai-wine"
                    href="#projectos">
                    Ver o nosso trabalho
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative aspect-4/3 w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-full">
              <Image
                alt="Apoio comunitário da Associação Osãi"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                src="/images/hero.jpg"
              />
              <div className="absolute inset-0 bg-linear-to-t from-osai-wine/60 via-transparent to-transparent lg:bg-linear-to-r lg:from-osai-wine/35 lg:to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md sm:left-auto sm:max-w-xs">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-osai-gold">
                  A nossa missão
                </p>
                <p className="mt-2 font-display text-xl font-semibold leading-7">
                  Viver para servir com proximidade, respeito e transparência.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 -mt-1 bg-osai-cream pb-20 lg:-mt-12 lg:bg-transparent">
          <div className="site-container grid overflow-hidden rounded-3xl bg-white shadow-[0_24px_70px_rgb(84_1_1/0.14)] md:grid-cols-3">
            {stats.map((stat, index) => (
              <article
                className="relative p-8 md:p-9"
                key={stat.label}>
                {index > 0 ? (
                  <span className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-osai-line md:block" />
                ) : null}
                <p className="font-display text-4xl font-bold text-osai-wine">
                  <AnimatedCounter
                    value={String(stat.value)}
                    duration={2000}
                  />
                </p>
                <h2 className="mt-1 font-bold text-osai-ink">{stat.label}</h2>
              </article>
            ))}
          </div>
          <p className="site-container mt-4 text-center text-xs text-osai-muted">
            Indicadores institucionais divulgados pela Associação Osãi.
          </p>
        </section>

        <section
          className="soft-grid bg-osai-cream py-24"
          id="sobre">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative aspect-4/5 w-full">
              <div className="absolute -left-5 -top-5 size-28 rounded-full bg-osai-gold/25" />
              <Image
                alt="Sofiana Lua Pindali Mbakassy, fundadora da Associação Osãi"
                className="relative h-full w-full rounded-4xl object-cover shadow-[0_24px_60px_rgb(84_1_1/0.15)]"
                height={900}
                src="/images/sofiana.jpg"
                width={720}
              />
              <div className="absolute -bottom-6 -right-3 max-w-62.5 rounded-2xl bg-osai-orange p-5 text-white shadow-xl sm:right-8">
                <p className="font-display text-xl font-semibold">
                  “Osãi” significa Lua em Umbundo.
                </p>
              </div>
            </div>

            <div className="pt-10 lg:pl-8 lg:pt-0">
              <SectionLabel>Quem somos</SectionLabel>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-osai-ink sm:text-5xl">
                Uma história pessoal transformada numa missão colectiva.
              </h2>
              <div className="mt-7 space-y-5 text-base leading-8">
                <p>
                  A Associação Osãi nasceu da história de{" "}
                  <strong className="text-osai-wine">
                    Sofiana Lua Pindali Mbakassy
                  </strong>
                  , que enfrentou a depressão desde a adolescência e decidiu
                  transformar essa experiência num caminho de apoio para outras
                  pessoas.
                </p>
                <p>
                  Criamos pontes entre comunidades, profissionais e instituições
                  para tornar a informação e o acompanhamento em saúde mental
                  mais próximos, humanos e acessíveis.
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Prevenção e informação",
                  "Apoio psicossocial",
                  "Capacitação comunitária",
                  "Mobilização solidária",
                ].map((item) => (
                  <div
                    className="flex items-center gap-3 rounded-xl bg-white p-4 font-semibold text-osai-ink shadow-sm"
                    key={item}>
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-osai-orange/15 text-osai-orange">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-24 lg:py-32"
          id="projectos">
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <SectionLabel>Causas e projectos</SectionLabel>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-osai-ink sm:text-5xl">
                  Apoio que chega onde é necessário.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 lg:justify-self-end">
                Cada iniciativa responde a uma necessidade concreta: reconhecer
                sinais, facilitar o acesso ao apoio e fortalecer quem já cuida
                das comunidades.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  className={`group overflow-hidden rounded-4xl ${
                    index === 0
                      ? "bg-osai-wine text-white"
                      : "bg-osai-cream text-osai-body"
                  }`}
                  id={project.id}
                  key={project.title}>
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      alt={project.alt}
                      className="object-cover transition duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      src={project.image}
                    />
                    <span className="absolute left-5 top-5 grid size-12 place-items-center rounded-full bg-white font-display font-bold text-osai-wine shadow-lg">
                      {project.number}
                    </span>
                  </div>
                  <div className="p-7 lg:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-osai-orange">
                      {project.eyebrow}
                    </p>
                    <h3
                      className={`mt-2 font-display text-3xl font-semibold ${
                        index === 0 ? "text-white" : "text-osai-ink"
                      }`}>
                      {project.title}
                    </h3>
                    <p
                      className={`mt-4 leading-7 ${
                        index === 0 ? "text-white/70" : ""
                      }`}>
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-osai-wine py-24 text-white"
          id="como-ajudar">
          <div className="absolute -right-32 -top-32 size-96 rounded-full border-70 border-white/5" />
          <div className="site-container relative">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-osai-gold">
                Como ajudar
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                Há várias formas de fazer parte desta missão.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                Escolha como quer contribuir. Todos os apoios devem ser
                confirmados através dos canais oficiais da Associação.
              </p>
            </div>

            <div
              className="mt-12 grid gap-5 lg:grid-cols-3"
              id="voluntariado">
              {waysToHelp.map((way) => (
                <article
                  className="group flex min-h-77.5 flex-col rounded-3xl bg-white p-7 text-osai-body transition hover:-translate-y-1 hover:shadow-2xl"
                  key={way.title}>
                  <div className="grid size-12 place-items-center rounded-full bg-osai-gold font-display font-bold text-osai-ink">
                    {way.number}
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-osai-ink">
                    {way.title}
                  </h3>
                  <p className="mt-3 leading-7">{way.description}</p>
                  <Link
                    className="mt-auto flex items-center justify-between border-t border-osai-line pt-5 text-sm font-bold uppercase text-osai-wine hover:text-osai-orange"
                    href="/doacoes">
                    {way.action}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-white/70 sm:flex-row">
              <p>
                <strong className="text-white">Doações seguras:</strong>{" "}
                confirme o titular e o IBAN antes de qualquer transferência.
              </p>
              <Link
                className="shrink-0 font-bold text-osai-gold hover:text-white"
                href="/doacoes">
                Confirmar dados oficiais
              </Link>
            </div>
          </div>
        </section>

        <section
          className="bg-osai-cream py-24"
          id="noticias">
          <div className="site-container">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <SectionLabel>Notícias e transparência</SectionLabel>
                <h2 className="mt-5 font-display text-4xl font-semibold text-osai-ink sm:text-5xl">
                  Acompanhe o que estamos a fazer.
                </h2>
              </div>
              <Link
                className="w-fit rounded-full border border-osai-wine px-5 py-2.5 text-xs font-bold uppercase text-osai-wine hover:bg-osai-wine hover:text-white"
                href="mailto:info@osai.ao?subject=Pedido%20de%20relatórios%20da%20Associação%20Osãi">
                Solicitar relatórios
              </Link>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {updates.map((update, index) => (
                <article
                  className={`group overflow-hidden rounded-3xl bg-white ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                  key={update.title}>
                  <div
                    className={`relative w-full overflow-hidden ${
                      index === 0 ? "aspect-2/1" : "aspect-square"
                    }`}>
                    <Image
                      alt={update.alt}
                      className="object-cover transition duration-500 group-hover:scale-105"
                      fill
                      sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                      src={update.image}
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-osai-wine shadow-lg">
                      {update.type}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-semibold text-osai-ink">
                      {update.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-7">
                      {update.description}
                    </p>
                    <p className="mt-5 text-xs font-bold uppercase tracking-wider text-osai-orange">
                      {update.status}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="site-container grid overflow-hidden rounded-4xl bg-osai-orange text-white lg:grid-cols-[1.3fr_0.7fr]">
            <div className="p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-osai-wine">
                Precisa de orientação?
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Não precisa enfrentar tudo sozinho.
              </h2>
              <p className="mt-4 max-w-xl text-white/85">
                Fale connosco para conhecer os serviços e iniciativas
                disponíveis. Em risco imediato, procure os serviços de
                emergência da sua região.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 bg-osai-wine p-8 sm:p-12">
              <Link
                className="flex items-center gap-3 rounded-full bg-osai-gold px-5 py-3 font-bold text-black hover:bg-white"
                href="tel:+244933057707">
                <PhoneIcon className="size-5" />
                933 057 707
              </Link>
              <Link
                className="flex items-center gap-3 rounded-full border border-white/30 px-5 py-3 font-bold text-white hover:bg-white hover:text-osai-wine"
                href="mailto:info@osai.ao">
                <MailIcon className="size-5" />
                info@osai.ao
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-osai-line py-14">
          <div className="site-container flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-osai-orange">
                Rede de apoio
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-osai-ink">
                Nossos Parceiros
              </h2>
            </div>
            <Image
              alt="GAM — Grupo António Mosquito"
              height={98}
              src="/images/partner-gam.png"
              width={150}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}