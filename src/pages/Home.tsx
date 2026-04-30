import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, FileSearch, MessageCircle } from "lucide-react";
import Seo from "@/components/site/Seo";
import { OrganizationLd, WebSiteLd, BreadcrumbLd } from "@/components/site/JsonLd";
import heroImg from "@/assets/hero-network.jpg";
import researchImg from "@/assets/research-grid.jpg";
import communityImg from "@/assets/community-orbit.jpg";
import StatCard from "@/components/site/StatCard";
import SectionHeading from "@/components/site/SectionHeading";
import Logo from "@/components/site/Logo";

const sections = [
  {
    to: "/manifesto",
    eyebrow: "01 · Манифест",
    title: "Большой выход малых компаний",
    description:
      "Кто такой смоллтех, почему его не видят и почему пора это менять. Полный лонгрид о позиционировании сообщества.",
    image: heroImg,
    icon: Sparkles,
  },
  {
    to: "/research",
    eyebrow: "02 · Исследование",
    title: "Что болит у smalltech и midtech команд",
    description:
      "468 анкет, 6 конференций, 979 аналитических единиц. Топ-6 болей и карта будущей программы конференции.",
    image: researchImg,
    icon: FileSearch,
  },
  {
    to: "/community",
    eyebrow: "03 · Сообщество",
    title: "Соединяться вместо конкурировать",
    description:
      "От чата для соло-деврелов до объединения 30+ компаний и партнёрства с Онтико. Как мы устроены и что уже сделали.",
    image: communityImg,
    icon: Users,
  },
];

const Home = () => {
  return (
    <div className="anim-fade">
      <Seo
        title="Смоллтех — сообщество малых и средних ИТ-компаний"
        description="Объединение инженеров, деврелов и менеджеров технобренда smalltech и midtech. Манифест, исследование 468 анкет и программа конференции."
        path="/"
        type="website"
        keywords="смоллтех, smalltech, midtech, ИТ-сообщество, малые ИТ-компании, средние ИТ-компании, конференция, деврел, инженерное сообщество, Онтико"
      />
      <OrganizationLd />
      <WebSiteLd />
      <BreadcrumbLd items={[]} />
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        {/* Brand violet blobs replacing the old generated network image */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-10 -z-10 h-[520px] w-[640px] rounded-[55%] blob-violet opacity-90"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-[20%] -z-10 h-[420px] w-[520px] rounded-[55%] blob-violet-soft"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 -z-10"
          style={{ background: "linear-gradient(180deg, transparent, hsl(var(--background)))" }}
          aria-hidden
        />

        <div className="container-wide relative pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="anim-fade-up">
              <span className="chip-amber">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-glow anim-pulse-glow" />
                сообщество смоллтеха · открыто к коллаборации
              </span>
              <h1 className="mt-7 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Большой выход{" "}
                <span className="text-gradient-amber">малых компаний</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
                В России более 217&nbsp;000 ИТ-компаний. Бо́льшая часть из них делает реальную
                инженерную работу — и остаётся за пределами повестки. Смоллтех — это объединение
                для тех, кто строит технологии без бигтех-бюджетов.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/manifesto"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                >
                  Прочитать манифест
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/research"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface/60 px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Исследование и программа
                </Link>
              </div>
            </div>

            <div className="relative hidden justify-center lg:flex">
              <Logo variant="blob" className="scale-110" />
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY METRICS */}
      <section className="container-wide py-20 sm:py-24">
        <div className="grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
          <SectionHeading
            eyebrow="что мы уже сделали"
            title={<>Сообщество в&nbsp;цифрах</>}
            description="За год сообщество выросло из небольшого чата соло-деврелов в объединение из десятков компаний с собственным исследованием, мероприятиями и партнёрствами."
          />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            accent
            value="30+"
            label="компаний в ядре"
            hint="ближайший пулл соратников и активистов"
          />
          <StatCard
            value="468"
            label="анкет в исследовании"
            hint="6 крупнейших ИТ-конференций страны"
          />
          <StatCard
            value="2"
            label="офлайн-мероприятия"
            hint="и следующие уже в планах"
          />
          <StatCard
            value="1"
            label="стратегический партнёр"
            hint="Онтико — организатор HighLoad++ и др."
          />
        </div>
      </section>

      {/* SECTIONS GRID */}
      <section className="container-wide pb-24 sm:pb-32">
        <SectionHeading
          eyebrow="карта сайта"
          title={<>Три входа в одну тему</>}
          description="Сайт — не лендинг, а портал. Каждый раздел даёт свой угол: от концепции до данных и людей."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="surface-card group relative flex flex-col overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="chip">{s.eyebrow}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold leading-tight sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Открыть раздел
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="container-wide pb-24 sm:pb-32">
        <div className="surface-card relative overflow-hidden rounded-3xl px-8 py-14 sm:px-14 sm:py-20">
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber/15 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="chip-amber">
                <MessageCircle className="h-3.5 w-3.5" />
                открыто новым
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl text-balance">
                Конкуренцию с бигтехом не выдержать поодиночке.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Мы создаём собственный сейф-спейс и точки сборки, которые действуют по нашим
                правилам. Будьте наблюдателем или активным участником — мы открыты к коллаборации.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                to="/join"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Как присоединиться
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/community"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface/60 px-6 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Что мы уже делаем
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
