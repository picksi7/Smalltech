import { useState } from "react";
import { Calendar, MapPin, Play, FileText, ExternalLink, ArrowDown } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Seo from "@/components/site/Seo";
import { OrganizationLd, BreadcrumbLd } from "@/components/site/JsonLd";

import petrovichLogo from "@/assets/partners/petrovich-tech.png";
import vitechLogo from "@/assets/partners/vitech.png";
import pprLogo from "@/assets/partners/ppr.png";
import griLogo from "@/assets/partners/gri.png";
import ithrLogo from "@/assets/partners/it-hr-awards.png";
import byteLogo from "@/assets/partners/byte.png";
import tochkaLogo from "@/assets/partners/tochka-kipeniya.png";

// ===== Types =====
type Talk = {
  kind?: "talk" | "panel";
  title: string;
  speaker?: string;
  description: string;
  embedSrc: string;
  slidesUrl?: string;
  slidesLabel?: string;
};

type Partner = {
  name: string;
  url: string;
  /** Optional image logo — when absent, we render a clean wordmark tile. */
  logo?: string;
  /** Short label shown when there is no image logo. */
  label?: string;
};

type Meetup = {
  id: string;
  vol: string;
  title: string;
  date: string;
  city: string;
  venue: { name: string; url?: string };
  intro: string;
  partners: Partner[];
  talks: Talk[];
};

// ===== Data =====
const MEETUPS: Meetup[] = [
  {
    id: "vol-2",
    vol: "Vol.2",
    title: "AI и лидерство в смоллтехе",
    date: "30 января 2026",
    city: "Москва",
    venue: { name: "Ви.Tech" },
    intro:
      "Три доклада и круглый стол. Программа рассчитана на совместную работу с аудиторией: разбираем сложные кейсы, проектируем алгоритм внедрения изменений вместе.",
    partners: [
      { name: "Ви.Tech", url: "https://vitech.ru", logo: vitechLogo },
      { name: "ППР — Передовые Платежные Решения", url: "https://ppr.ru", logo: pprLogo },
      { name: "Петрович-Тех", url: "https://petrovich.tech/", logo: petrovichLogo },
    ],
    talks: [
      {
        title: "Как обуздать звезду: инструкция для руководителя на новом проекте",
        speaker: "Михаил Шваркунов, GRI",
        description:
          "О том, как работать с устоявшимся авторитетом, если вы — новый лид или несёте изменения в привычные процессы. Михаил предлагает свои наработки и разбирает сложные случаи вместе с участниками.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239023&hash=d871f78b52d17360&hd=3",
        slidesUrl: "https://vk.cc/cTZU7n",
      },
      {
        title: "Уровни зрелости внедрения AI в процессы",
        speaker: "Иван Поддубный, Вебпрактик",
        description:
          "Прежде чем выбрать, куда двигаться, нужно определить своё текущее местоположение. Внедрение сложных изменений сильно зависит от уровня зрелости коллектива и процессов. Вместе с Иваном учимся определять свою точку на карте и проектируем дальнейший путь.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239024&hash=c5fba70629e77644&hd=3",
        slidesUrl: "https://north-leshiy.github.io/ai-maturity-model/",
        slidesLabel: "Открыть AI Maturity Model",
      },
      {
        title: "Проект AI-Суфлёр для продаж и сервиса",
        speaker: "Дмитрий Громов, Надежда Кохтачева, Передовые Платежные Решения",
        description:
          "Доклад объединяет темы лидерства и внедрения изменений на примере масштабного и долгого пути проекта Дмитрия и Надежды. Обсуждаем, как формируется цель проекта, как бизнес принимает решения, как сформировать команду и что предусмотреть на самом старте.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239025&hash=5ba84fb72a4cb980&hd=3",
        slidesUrl: "https://vk.cc/cTZUq4",
      },
      {
        kind: "panel",
        title: "Круглый стол: Алгоритм внедрения ИИ в смоллтехе",
        description:
          "При активном участии аудитории разрабатываем алгоритм внедрения изменений на примере AI — он поможет всем причастным предусмотреть подводные камни ещё на старте и подсветить опасные места.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239027&hash=8d41cbaf20f09a3e&hd=3",
      },
    ],
  },
  {
    id: "vol-1",
    vol: "Vol.1",
    title: "Первый опыт",
    date: "26 апреля 2025",
    city: "Санкт-Петербург",
    venue: {
      name: "Предпринимательская Точка Кипения ПромТехДизайн",
      url: "https://t.me/tkpromtechdesign",
    },
    intro:
      "Первый митап смоллтехов в Санкт-Петербурге: говорим честно про перегретый рынок труда, стажировки за пределами больших корпораций и роль первого опыта.",
    partners: [
      { name: "IT HR Awards", url: "https://t.me/ithrawards", logo: ithrLogo },
      { name: "Postgres Professional", url: "https://t.me/PostgresProEdu", label: "Postgres Pro" },
      { name: "ИнфоТеКС", url: "https://t.me/infotecsintern", label: "ИнфоТеКС" },
      { name: "Петрович-Тех", url: "https://petrovich.tech/", logo: petrovichLogo },
      { name: "Byte", url: "https://t.me/ByteITclub", logo: byteLogo },
      {
        name: "Точка Кипения ПромТехДизайн",
        url: "https://t.me/tkpromtechdesign",
        logo: tochkaLogo,
      },
    ],
    talks: [
      {
        title: "Работа есть. Люди есть. Почему всё так плохо с рынком труда?",
        speaker: "Альберт Степанцов, Спринт-Ф",
        description:
          "Поговорим честно: рынок перегрет, вакансии и резюме не сходятся, алгоритмы буксуют, а люди теряются в потоке. Причина? Старые подходы больше не работают — и на их место пока ничего внятного не пришло.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239019&hash=5f3320be294b6088&hd=3",
        slidesUrl: "https://vk.cc/cLSgpf",
      },
      {
        title: "Стажировка и первый опыт. Куда если не Яндекс?",
        speaker: "Елизавета Егорнова, Атом",
        description:
          "Цель доклада — показать, что опыт и жизнь студента уже большой опыт. Если набор на стажировку идёт не оптом (20–30 человек разом), а локальные истории ведёт один конкретный человек со стороны организаторов — он работает более вдохновлённо и точечно.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239021&hash=56685eae02f665f3&hd=3",
      },
      {
        title: "Как тестировать на стажировке без подсказок и фреймворков",
        speaker: "Дмитрий Козлов, ИнфоТеКС",
        description:
          "Реальная история о том, как я столкнулся с отсутствием готовых инструментов, искал не самые очевидные варианты решения, победил проблемы отладки с помощью кастомного логирования и нашёл спасение в Python-библиотеке Pexpect.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239017&hash=fb496991389e7bfb&hd=3",
        slidesUrl: "https://vk.cc/cLSgio",
      },
      {
        kind: "panel",
        title: "Интерактив: «Отсобеседуй своего потенциального руководителя»",
        speaker:
          "Анна Афонина (ProIT Fest), Виталий Левченко (Wildberries), Анатолий Иванов (investing.com)",
        description:
          "Интерактивный формат, в котором аудитория задаёт вопросы потенциальным руководителям и проверяет, насколько комфортно с ними работать.",
        embedSrc:
          "https://vkvideo.ru/video_ext.php?oid=-230456834&id=456239018&hash=527cc3690e5254d9&hd=3",
      },
    ],
  },
];

// ===== Sub-components =====

const PartnerLogo = ({ partner }: { partner: Partner }) => (
  <a
    href={partner.url}
    target="_blank" rel="noopener noreferrer"
    title={partner.name}
    aria-label={partner.name}
    className="group flex h-16 w-32 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 p-2 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/15 hover:shadow-glow sm:h-20 sm:w-40"
  >
    {partner.logo ? (
      <img
        src={partner.logo}
        alt={partner.name}
        className="h-full w-full object-contain transition-transform group-hover:scale-[1.04]"
        loading="lazy"
      />
    ) : (
      <span className="font-display text-base font-semibold tracking-tight text-foreground transition-transform group-hover:scale-[1.04] sm:text-lg">
        {partner.label ?? partner.name}
      </span>
    )}
  </a>
);

const VideoEmbed = ({ src, title }: { src: string; title: string }) => {
  const [active, setActive] = useState(false);
  if (active) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          src={`${src}&autoplay=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock"
          allowFullScreen
          frameBorder={0}
        />
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Запустить видео: ${title}`}
      className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface-elevated to-background transition-all hover:border-primary/50"
    >
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(ellipse_60%_55%_at_50%_50%,hsl(270_100%_60%/_0.45),hsl(264_100%_50%/_0.25)_50%,transparent_75%)] blur-2xl transition-opacity group-hover:opacity-90" />
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
      <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-amber text-primary-foreground shadow-glow transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
        <Play className="h-7 w-7 translate-x-0.5 fill-current sm:h-8 sm:w-8" />
      </span>
      <span className="absolute bottom-3 left-3 right-3 z-10 truncate rounded-md bg-background/70 px-2 py-1 text-left text-xs text-muted-foreground backdrop-blur sm:text-sm">
        VK Video · нажмите для запуска
      </span>
    </button>
  );
};

const TalkCard = ({ talk, index }: { talk: Talk; index: number }) => {
  const isPanel = talk.kind === "panel";
  return (
    <article className="surface-card grid gap-6 rounded-2xl p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
      <div className="flex flex-col">
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={
              isPanel
                ? "chip-amber"
                : "chip"
            }
          >
            {isPanel ? "круглый стол" : "доклад"}
          </span>
        </div>
        <h4 className="font-display text-xl font-semibold leading-snug text-balance sm:text-2xl">
          {talk.title}
        </h4>
        {talk.speaker && (
          <p className="mt-2 text-sm text-primary-glow">{talk.speaker}</p>
        )}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {talk.description}
        </p>
        {talk.slidesUrl && (
          <a
            href={talk.slidesUrl}
            target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary-glow transition-colors hover:bg-primary/20"
          >
            <FileText className="h-4 w-4" />
            {talk.slidesLabel ?? "Презентация"}
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>
        )}
      </div>
      <div className="self-start">
        <VideoEmbed src={talk.embedSrc} title={talk.title} />
      </div>
    </article>
  );
};

const MeetupSection = ({ meetup }: { meetup: Meetup }) => {
  return (
    <section
      id={meetup.id}
      className="container-wide scroll-mt-24 py-20 sm:py-24"
    >
      {/* Header */}
      <div className="mb-12 max-w-4xl">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="chip-amber">Митап {meetup.vol}</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {meetup.date}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {meetup.city}
          </span>
        </div>
        <h2 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-5xl">
          {meetup.title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
          Нас принимал{" "}
          {meetup.venue.url ? (
            <a
              href={meetup.venue.url}
              target="_blank" rel="noopener noreferrer"
              className="link-underline text-foreground"
            >
              {meetup.venue.name}
            </a>
          ) : (
            <span className="text-foreground">{meetup.venue.name}</span>
          )}
          . {meetup.intro}
        </p>
      </div>

      {/* Partners */}
      <div className="mb-12">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Партнёры митапа
        </h3>
        <div className="flex flex-wrap gap-3">
          {meetup.partners.map((p) => (
            <PartnerLogo key={p.name} partner={p} />
          ))}
        </div>
      </div>

      {/* Talks */}
      <div className="space-y-6">
        {meetup.talks.map((t, i) => (
          <TalkCard key={t.title} talk={t} index={i} />
        ))}
      </div>
    </section>
  );
};

// ===== Page =====
const Materials = () => {
  return (
    <div className="anim-fade">
      <Seo
        title="Материалы и медиа Смоллтех"
        description="Презентации, исследования, статьи и медиа сообщества Смоллтех — для журналистов, партнёров и участников."
        path="/materials"
        type="website"
        keywords="смоллтех, smalltech, материалы, медиа, презентации, исследования"
      />
      <OrganizationLd />
      <BreadcrumbLd items={[{ name: 'Материалы', path: '/materials' }]} />
      {/* HEAD */}
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="container-wide py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="chip-amber">материалы</span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Записи докладов и{" "}
              <span className="text-gradient-amber">презентации</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
              После каждого митапа сообщество выкладывает видео выступлений и
              слайды спикеров — чтобы важные разговоры жили дальше и были
              доступны всем смоллтехам, не только тем, кто был в зале.
            </p>

            {/* Quick nav */}
            <div className="mt-8 flex flex-wrap gap-3">
              {MEETUPS.map((m) => (
                <a
                  key={m.id}
                  href={`#${m.id}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <span className="font-mono-tech text-xs text-primary-glow">
                    {m.vol}
                  </span>
                  <span>{m.title}</span>
                  <ArrowDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* MEETUPS */}
      {MEETUPS.map((m, idx) => (
        <div key={m.id}>
          {idx > 0 && (
            <div className="container-wide">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          )}
          <MeetupSection meetup={m} />
        </div>
      ))}

      {/* Outro */}
      <section className="container-wide pb-24">
        <div className="surface-card rounded-2xl p-8 text-center sm:p-12">
          <SectionHeading
            align="center"
            eyebrow="следующий митап"
            title={<>Vol.3 — уже в&nbsp;работе</>}
            description="Запись и презентации появятся здесь сразу после мероприятия. Если хотите выступить или предложить тему — напишите нам."
          />
          <a
            href="https://conf.ontico.ru/lectures/submit/external-xxexk7892X"
            target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            Предложить доклад
          </a>
        </div>
      </section>
    </div>
  );
};

export default Materials;
