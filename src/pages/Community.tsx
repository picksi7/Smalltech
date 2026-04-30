import { Link } from "react-router-dom";
import { Check, Calendar, Handshake, Users, ArrowRight } from "lucide-react";
import communityImg from "@/assets/community-orbit.jpg";
import SectionHeading from "@/components/site/SectionHeading";
import Seo from "@/components/site/Seo";
import { OrganizationLd, BreadcrumbLd } from "@/components/site/JsonLd";

const milestones = [
  { year: "2024", title: "Чат соло-деврелов", text: "Несколько менеджеров технобренда из малых ИТ-компаний начинают собираться в чате — место поддержки и нестыдных вопросов." },
  { year: "весна 2025", title: "Объединение", text: "Сообщество формируется в объединение для инженеров смоллтех-компаний и начинает публичную деятельность." },
  { year: "лето 2025", title: "Стратегия и цель", text: "Сформулирована цель — «сделать смоллтех привлекательным», и стратегия — через коллаборацию, а не конкуренцию." },
  { year: "осень 2025", title: "Партнёрство с Онтико", text: "Установлено долгосрочное сотрудничество с организатором крупнейших ИТ-конференций страны." },
  { year: "зима 2025–26", title: "Исследование", text: "Проведено исследование болей и потребностей смоллтех-инженеров на базе шести крупных ИТ-конференций." },
  { year: "2026", title: "Ядро + мероприятия", text: "Сформировано ядро активистов, расширен пулл соратников до 30+ компаний, проведены два офлайн-мероприятия и запланированы следующие." },
];

const done = [
  "Сформулирована цель сообщества — «сделать смоллтех привлекательным».",
  "Определена стратегия — через коллаборацию, а не конкуренцию.",
  "Сформировано основное ядро активистов, расширен пулл ближайших соратников до 30 компаний.",
  "Проведено исследование болей и потребностей смоллтех-инженеров.",
  "Проведено два офлайн-мероприятия и запланированы следующие.",
  "Установлено долгосрочное сотрудничество с Онтико.",
];

const Community = () => {
  return (
    <div className="anim-fade">
      <Seo
        title="Сообщество Смоллтех — 30+ компаний, партнёрство с Онтико"
        description="Как устроено сообщество Смоллтех: от чата соло-деврелов до объединения 30+ компаний и стратегического партнёрства с Онтико."
        path="/community"
        type="website"
        keywords="смоллтех, smalltech, сообщество, Онтико, ИТ-объединение, малые ИТ-компании"
      />
      <OrganizationLd />
      <BreadcrumbLd items={[{ name: 'Сообщество', path: '/community' }]} />
      {/* HEAD */}
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <img
          src={communityImg}
          alt=""
          aria-hidden
          width={1400}
          height={900}
          className="pointer-events-none absolute -right-32 -top-20 -z-10 h-[120%] w-[60%] object-cover opacity-40 mix-blend-screen"
        />
        <div className="container-wide py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="chip-amber">сообщество</span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Соединяться вместо{" "}
              <span className="text-gradient-amber">конкурировать</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
              Мы объединяем усилия, работаем «вскладчину», помогаем друг другу с генерацией идей,
              форматов, поиском ресурсов. Наши митапы — сборная солянка из разнобрендового мерча,
              спикеров и идей.
            </p>
          </div>
        </div>
      </header>

      {/* DONE LIST */}
      <section className="container-wide py-20 sm:py-24">
        <SectionHeading
          eyebrow="что мы уже сделали"
          title="Шесть значимых шагов"
          description="За год сообщество прошло путь от закрытого чата до публичного объединения с собственным исследованием и стратегическими партнёрствами."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {done.map((d) => (
            <div key={d} className="surface-card flex items-start gap-4 rounded-2xl p-5 sm:p-6">
              <div className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="h-4 w-4" />
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-wide py-12 sm:py-20">
        <SectionHeading
          eyebrow="хронология"
          title="Как мы росли"
        />
        <div className="mt-12 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" aria-hidden />
          <div className="space-y-10">
            {milestones.map((m, i) => {
              const right = i % 2 === 1;
              return (
                <div key={m.year} className="relative grid gap-4 md:grid-cols-2 md:gap-12">
                  {right && <div className="hidden md:block" aria-hidden />}
                  <div className={`relative pl-12 md:pl-0 ${right ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className={`absolute top-2 left-2 h-4 w-4 rounded-full bg-gradient-amber shadow-glow md:left-auto ${right ? "md:-left-2" : "md:-right-2"}`} aria-hidden />
                    <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary">{m.year}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="container-wide py-20 sm:py-24">
        <div className="surface-card overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <span className="chip-amber"><Handshake className="h-3.5 w-3.5" /> стратегический партнёр</span>
              <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">Онтико</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Организатор крупнейших ИТ-конференций страны: HighLoad++, TeamLead Conf,
                DevOpsConf, GolangConf, AiConf и других. Партнёрство даёт сообществу площадку
                для исследований и мероприятий.
              </p>
              <a
                href="https://ontico.ru"
                target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                ontico.ru <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["HighLoad++", "TeamLead Conf", "DevOpsConf", "GolangConf", "AiConf", "и другие"].map((c) => (
                <div key={c} className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-center text-sm">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="container-wide pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="surface-card rounded-3xl p-7 sm:p-8">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-display text-xl font-semibold">Мероприятия</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              За год — два офлайн-митапа сборной солянкой: разнобрендовый мерч, спикеры из разных
              компаний, общие темы. Следующие события уже в работе. Если хотите принять у себя
              митап или выступить — напишите.
            </p>
          </div>
          <div className="surface-card rounded-3xl p-7 sm:p-8">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-display text-xl font-semibold">Ядро активистов</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              30+ компаний в ближайшем пулле соратников. Деврелы, менеджеры технобренда, инженеры,
              CTO. Мы остаёмся открытыми — если ваш контекст похож, добро пожаловать.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide pb-24">
        <div className="surface-card relative overflow-hidden rounded-3xl px-8 py-12 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-amber/15 blur-3xl" aria-hidden />
          <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl text-balance">
              Если разделяете цель и стратегию — давайте знакомиться.
            </h2>
            <div className="flex md:justify-end">
              <Link
                to="/join"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Как присоединиться <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
