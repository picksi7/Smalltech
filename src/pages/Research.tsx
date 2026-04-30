import { Link } from "react-router-dom";
import { ArrowRight, Activity, Layers, Mic, Users2 } from "lucide-react";
import Seo from "@/components/site/Seo";
import { OrganizationLd, ArticleLd, DatasetLd, BreadcrumbLd } from "@/components/site/JsonLd";
import researchImg from "@/assets/research-grid.jpg";
import StatCard from "@/components/site/StatCard";
import SectionHeading from "@/components/site/SectionHeading";
import PainBar from "@/components/site/PainBar";

const sources = [
  { name: "DevOpsConf", date: "янв 2026", count: "67" },
  { name: "AiConf", date: "янв 2026", count: "54" },
  { name: "GolangConf", date: "янв 2026", count: "88" },
  { name: "TeamLead Conf", date: "фев 2026", count: "130" },
  { name: "HighLoad++", date: "фев 2026", count: "129" },
  { name: "CustDev", date: "апр 2026", count: "11" },
];

const cohorts = [
  { name: "Smalltech", count: "~180", note: "ИТ-штат до 300", pct: 52 },
  { name: "Midtech", count: "~166", note: "ИТ-штат 300–1500", pct: 48 },
  { name: "Enterprise", count: "122", note: "ИТ-штат 1500+", pct: 35, dim: true },
];

const pains = [
  { rank: 1, name: "Engineering Economics", description: "стоимость, ресурсы, эффективность", score: 54.9, respondents: 96, reach: "24.5%", tier: "must-cover" as const },
  { rank: 2, name: "Delivery & Processes", description: "поставка, процессы, качество", score: 54.4, respondents: 87, reach: "22.5%", tier: "must-cover" as const },
  { rank: 3, name: "Legacy & Migration", description: "модернизация, миграции", score: 52.6, respondents: 65, reach: "17.2%", tier: "must-cover" as const },
  { rank: 4, name: "Platform & DevOps", description: "инфраструктура, observability", score: 51.0, respondents: 78, reach: "20.6%", tier: "must-cover" as const },
  { rank: 5, name: "Architecture & Scalability", description: "системный дизайн, рост нагрузки", score: 50.9, respondents: 65, reach: "16.8%", tier: "must-cover" as const },
  { rank: 6, name: "Leadership & Org Design", description: "лидерство, команды, оргдизайн", score: 50.5, respondents: 60, reach: "15.8%", tier: "must-cover" as const },
  { rank: 7, name: "AI in Production", description: "прикладной AI, не хайп", score: 48.8, respondents: 65, reach: "17.6%", tier: "secondary" as const },
  { rank: 8, name: "Cross-functional Alignment", description: "коммуникация, выравнивание", score: 47.4, respondents: 56, reach: "14.3%", tier: "secondary" as const },
  { rank: 9, name: "Security & Compliance", description: "безопасность, соответствие", score: 46.2, respondents: 43, reach: "11.2%", tier: "secondary" as const },
  { rank: 10, name: "Learning & Maturity", description: "рост, зрелость, экспертиза", score: 45.9, respondents: 51, reach: "13.4%", tier: "secondary" as const },
  { rank: 11, name: "Data & Knowledge Systems", description: "данные, знания, поиск", score: 45.9, respondents: 48, reach: "12.5%", tier: "secondary" as const },
  { rank: 12, name: "People, Hiring & Career", description: "найм, рост, карьера", score: 45.8, respondents: 42, reach: "11.0%", tier: "secondary" as const },
];

const formats = [
  { name: "Case study", scope: "migration, architecture, AI, platform", text: "Показывает реальный путь команды, последовательность решений и цену ошибки." },
  { name: "War story / failure talk", scope: "legacy, delivery, leadership", text: "Позволяет разбирать тупики, откаты, сопротивление и ошибки без полировки reality gap." },
  { name: "Panel discussion", scope: "leadership, AI, security, alignment", text: "Подходит темам, где нет одного правильного рецепта и важны сравнительные практики." },
  { name: "Workshop / clinic", scope: "observability, testing, AI quality, process setup", text: "Даёт участнику конкретный инструмент, фреймворк или метод разбора ситуации." },
  { name: "AMA / office hours", scope: "migration, platform, leadership", text: "Закрывает незакрытые вопросы и помогает дожать сложные нюансы без лишней сцены." },
  { name: "Benchmark / patterns talk", scope: "efficiency, org design, delivery", text: "Нужен там, где аудитории важны ориентиры, зрелостные модели и сопоставимые паттерны." },
];

const balance = [
  { name: "Must-cover ядро", value: 60, accent: true },
  { name: "Important secondary", value: 30 },
  { name: "Экспериментальные форматы", value: 10 },
];

const actions = [
  "Собирать CFP не вокруг хайповых технологий, а вокруг инженерных и организационных сценариев боли.",
  "Приоритизировать кейсы компаний, которые росли под ограничениями, а не только зрелые enterprise-истории.",
  "Требовать от спикеров ответа на вопрос «что команда делала, где ошиблась и что теперь работает».",
  "Сбалансировать программу так, чтобы технические треки не существовали отдельно от лидерства, стоимости и delivery-логики.",
];

const Research = () => {
  return (
    <div className="anim-fade">
      <Seo
        title="Исследование болей smalltech и midtech — 468 анкет, 6 конференций"
        description="Топ-6 болей малых и средних ИТ-компаний. 468 анкет, 6 крупнейших ИТ-конференций, 979 аналитических единиц. Карта программы конференции Смоллтех."
        path="/research"
        type="article"
        publishedTime="2026-04-01"
        modifiedTime="2026-04-01"
        keywords="смоллтех, smalltech, midtech, исследование, боли ИТ-компаний, конференция, программа"
      />
      <OrganizationLd />
      <ArticleLd
        headline="Исследование болей smalltech и midtech — 468 анкет, 6 конференций"
        description="Топ-6 болей малых и средних ИТ-компаний. 468 анкет, 6 крупнейших ИТ-конференций, 979 аналитических единиц."
        path="/research"
        datePublished="2026-04-01"
        dateModified="2026-04-01"
      />
      <DatasetLd />
      <BreadcrumbLd items={[{ name: 'Исследование', path: '/research' }]} />
      {/* HEAD */}
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <img
          src={researchImg}
          alt=""
          aria-hidden
          width={1400}
          height={900}
          className="pointer-events-none absolute -right-20 top-0 -z-10 h-full w-[55%] object-cover opacity-30 mix-blend-screen"
        />
        <div className="container-wide py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="chip-amber">аналитический отчёт · апрель 2026</span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Что болит у{" "}
              <span className="text-gradient-amber">smalltech и midtech</span>{" "}
              команд
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
              Исследование аудитории шести крупнейших ИТ-конференций: 468 анкет, 3 глубинных
              кастдева, 979 аналитических единиц. Цель — понять, о чём должна быть программа
              следующей конференции, чтобы ответить на самые острые боли инженерных команд.
            </p>
          </div>

          {/* Top stats */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard accent value="468" label="анкет собрано" hint="после очистки и дедупликации" />
            <StatCard value="346" label="приоритетная когорта" hint="smalltech / midtech (73.9%)" />
            <StatCard value="979" label="аналитических единиц" hint="боли, вопросы, запросы" />
            <StatCard value="316" label="уникальных респондентов" hint="в тематизированном слое" />
          </div>
        </div>
      </header>

      {/* METHODOLOGY */}
      <section id="methodology" className="container-wide py-24">
        <SectionHeading
          eyebrow="01 · механика исследования"
          title="Как собирались и обрабатывались данные"
          description="Три типа источников: анкетные опросы участников конференций, глубинные кастдевы с CTO и Head of Engineering, и открытые ответы на вопросы о сложных профессиональных задачах."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="surface-card rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">Reach</h3>
            </div>
            <p className="mt-3 font-mono-tech text-xs text-muted-foreground">
              70% × доля уникальных респондентов + 30% × доля аналитических единиц
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Насколько широко тема распространена в когорте.
            </p>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">Intensity</h3>
            </div>
            <p className="mt-3 font-mono-tech text-xs text-muted-foreground">
              45% тип сигнала + 35% срочность + 15% current acute + 5% unmet question
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Насколько остро ощущается боль.
            </p>
          </div>
          <div className="surface-card rounded-2xl p-6 border-primary/40">
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold text-gradient-amber">Pain Priority Score</h3>
            </div>
            <p className="mt-3 font-mono-tech text-xs text-muted-foreground">
              50% × Reach + 35% × Intensity + 15% × широта между конференциями
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Итоговый приоритет темы для программы.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">источники данных</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sources.map((s) => (
              <div key={s.name} className="surface-card flex items-center justify-between rounded-xl px-5 py-4">
                <div>
                  <p className="font-display font-semibold">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.date}</p>
                </div>
                <p className="font-mono-tech text-sm text-primary">{s.count} анкет</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COHORTS */}
      <section id="cohorts" className="container-wide py-12 sm:py-20">
        <SectionHeading
          eyebrow="02 · когортный анализ"
          title="Кто составляет приоритетную когорту"
          description="Smalltech/midtech — компании с ИТ-штатом менее 1500 человек. Эта когорта составила 73.9% всей выборки и формирует основной сигнал для программы."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cohorts.map((c) => (
            <div
              key={c.name}
              className={`surface-card rounded-2xl p-7 ${c.dim ? "" : "border-primary/30"}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className={`font-display text-xl font-semibold ${c.dim ? "" : "text-gradient-amber"}`}>{c.name}</h3>
                <span className="font-mono-tech text-xs text-muted-foreground">{c.pct}%</span>
              </div>
              <p className="mt-4 font-display text-3xl font-semibold tabular-nums">{c.count}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.note} анкет</p>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-secondary/60">
                <div
                  className={`h-full rounded-full ${c.dim ? "bg-muted-foreground/30" : "bg-gradient-amber"}`}
                  style={{ width: `${c.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAIN RANKING */}
      <section id="pains" className="container-wide py-20 sm:py-24">
        <SectionHeading
          eyebrow="03 · рейтинг болей"
          title="12 тематических кластеров по силе боли"
          description="Каждая тема оценивается по охвату когорты, силе боли и широте присутствия между конференциями. Топ-6 формируют must-cover ядро программы."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pains.map((p) => (
            <PainBar key={p.rank} {...p} />
          ))}
        </div>
      </section>

      {/* MUST-COVER DETAIL */}
      <section className="container-wide py-12 sm:py-20">
        <SectionHeading
          eyebrow="04 · must-cover детально"
          title="Шесть обязательных треков ядра"
          description="Стоимость изменений, delivery, legacy, platform/devops, архитектура и лидерство образуют основу программы. AI усиливает её, но не подменяет."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {pains.slice(0, 6).map((p) => (
            <div key={p.rank} className="surface-card rounded-2xl p-7 sm:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-semibold sm:text-2xl">{p.name}</h3>
                <span className="font-display text-2xl font-semibold text-gradient-amber tabular-nums">
                  {p.score.toFixed(1)}
                </span>
              </div>
              <p className="mt-1 text-sm text-primary/90">{p.description}</p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-secondary/40 p-3">
                  <p className="font-mono-tech text-xs text-muted-foreground">resp.</p>
                  <p className="mt-1 font-display text-lg font-semibold">{p.respondents}</p>
                </div>
                <div className="rounded-lg bg-secondary/40 p-3">
                  <p className="font-mono-tech text-xs text-muted-foreground">reach</p>
                  <p className="mt-1 font-display text-lg font-semibold">{p.reach}</p>
                </div>
                <div className="rounded-lg bg-secondary/40 p-3">
                  <p className="font-mono-tech text-xs text-muted-foreground">tier</p>
                  <p className="mt-1 font-display text-xs font-semibold uppercase tracking-wider text-primary">must</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORMATS */}
      <section id="formats" className="container-wide py-20 sm:py-24">
        <SectionHeading
          eyebrow="форматирование опыта"
          title="Разные боли требуют разных сценических форм"
          description="Программа не должна состоять только из докладов. Там, где нужны маршруты и ошибки, работают case study и war story. Там, где нет одного правильного ответа — панели и AMA."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {formats.map((f) => (
            <div key={f.name} className="surface-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <Mic className="h-4 w-4 text-primary" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">формат</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold">{f.name}</h3>
              <p className="mt-1 text-xs text-primary/80">{f.scope}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BALANCE & ACTIONS */}
      <section className="container-wide py-12 sm:py-20">
        <SectionHeading
          eyebrow="05 · решения для комитета"
          title="Что делать программному комитету дальше"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="surface-card rounded-3xl p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <Layers className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">Рекомендуемый баланс программы</h3>
            </div>
            <div className="mt-7 space-y-5">
              {balance.map((b) => (
                <div key={b.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm">{b.name}</span>
                    <span className="font-display text-lg font-semibold tabular-nums">{b.value}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary/60">
                    <div
                      className={`h-full rounded-full ${b.accent ? "bg-gradient-amber" : "bg-muted-foreground/40"}`}
                      style={{ width: `${b.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card rounded-3xl p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <Users2 className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">4 ключевых действия</h3>
            </div>
            <ol className="mt-7 space-y-5">
              {actions.map((a, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-2xl font-semibold text-gradient-amber tabular-nums leading-none">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/90">{a}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <blockquote className="mt-12 surface-card rounded-3xl p-8 sm:p-10">
          <p className="font-display text-xl leading-snug sm:text-2xl text-balance">
            «Сильная программа — это последовательность решений от боли команды к полезному формату,
            а не список модных технологических ярлыков.»
          </p>
        </blockquote>
      </section>

      <section className="container-wide pb-24">
        <div className="flex flex-wrap gap-3">
          <Link
            to="/community"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            Узнать о сообществе <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/join"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface/60 px-6 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Внести вклад в программу
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Research;
