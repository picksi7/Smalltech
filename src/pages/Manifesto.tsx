import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Seo from "@/components/site/Seo";
import { OrganizationLd, ArticleLd, BreadcrumbLd } from "@/components/site/JsonLd";

const sizes = [
  { tier: "Микротех", range: "до 100", note: "сотрудников в ИТ-подразделениях" },
  { tier: "Смоллтех", range: "до 500", note: "сотрудников в ИТ" },
  { tier: "Мидтех", range: "до 1000–1500", note: "сотрудников в ИТ" },
];

const factors = [
  {
    n: "01",
    title: "Невидимость",
    sub: "смоллтех не знают, путают, недооценивают",
    text: "Большинство компаний страдает от того, что внешняя аудитория не воспринимает их как серьёзных технологических игроков. Их ассоциируют с продуктом или индустрией, но не с инженерной культурой.",
  },
  {
    n: "02",
    title: "Бюджетный разрыв",
    sub: "хочу, но не могу себе позволить",
    text: "Участие в крупных конференциях — стендах, спонсорстве — финансово недоступно для большинства смоллтехов. При этом стоять рядом с бигтехами крайне сложно, конкуренция высока.",
  },
  {
    n: "03",
    title: "Невозможность измерить результат",
    sub: "метрики технобренда непредсказуемы",
    text: "Эффективность продвижения технобренда — большой и непростой вопрос. Чем менее предсказуема метрика, тем сложнее обосновать расходы на её достижение.",
  },
  {
    n: "04",
    title: "Одиночество",
    sub: "не у кого учиться, не с кем обмениваться опытом",
    text: "Деврелы и менеджеры по технобренду в смоллтехе работают в изоляции, часто без команды. Нет профессиональной среды равных, нет коллег с похожим контекстом, а опыт бигтеха неприменим.",
  },
];

const Manifesto = () => {
  return (
    <article className="anim-fade">
      <Seo
        title="Манифест Смоллтех — большой выход малых ИТ-компаний"
        description="Кто такой смоллтех, почему его не видят и почему пора это менять. Манифест сообщества малых и средних ИТ-компаний России."
        path="/manifesto"
        type="article"
        publishedTime="2025-01-01"
        modifiedTime="2025-01-01"
        keywords="смоллтех, smalltech, midtech, манифест, ИТ-сообщество, малые ИТ-компании, технобренд"
      />
      <OrganizationLd />
      <ArticleLd
        headline="Манифест Смоллтех — большой выход малых ИТ-компаний"
        description="Кто такой смоллтех, почему его не видят и почему пора это менять."
        path="/manifesto"
        datePublished="2025-01-01"
        dateModified="2025-01-01"
      />
      <BreadcrumbLd items={[{ name: 'Манифест', path: '/manifesto' }]} />
      {/* HEAD */}
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
        <div
          className="absolute inset-0 -z-10 opacity-80"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="container-prose py-24 sm:py-32">
          <span className="chip-amber">манифест · v1</span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Смоллтех:{" "}
            <span className="text-gradient-amber">большой выход</span>{" "}
            малых компаний
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Термин «бигтех» хорошо знаком в индустрии. Сходу легко назвать минимум пять компаний,
            прочно ассоциирующихся с ним, а для специалистов по техно- и hr-бренду этот список может
            дойти и до 30. Тем временем в России зарегистрировано свыше{" "}
            <span className="text-foreground font-semibold">217&nbsp;000 ИТ-компаний</span>
            {" "}— и большинство из них никогда не попадало в рейтинги Хабра, Экопси и hh.ru.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="container-prose py-20 sm:py-24">
        <p className="text-lg leading-relaxed text-foreground/90">
          Они делают продукты, держат инфраструктуру, двигают прикладные технологии — и остаются
          за пределами повестки. Повестку формируют крупные компании, и это логично: захват рынка
          требует больших инвестиций и долгосрочной стратегии. Лидеры определяют технологическую
          карту индустрии — какие практики считаются правильными, какие задачи — значимыми, какие
          технологии — актуальными.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          На этом фоне существует другой, намного крупный по объёму слой рынка, который никак не
          влияет на эту повестку и часто вынужден ей следовать, при этом составляя бо́льшую часть
          реальной инженерной работы. Это и есть{" "}
          <span className="text-foreground">смолл- и мидтех</span>.
        </p>
      </section>

      {/* SIZES */}
      <section className="container-prose py-12">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">Номинально это компании с ИТ-штатом до ~1000 человек</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {sizes.map((s) => (
            <div key={s.tier} className="surface-card rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.tier}</p>
              <p className="mt-3 font-display text-2xl font-semibold text-gradient-amber">{s.range}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          Но размер — слабый критерий. Ключевое отличие — в условиях: ограниченные бюджеты на
          развитие и технобренд, отсутствие запаса прочности на длинные эксперименты,
          необходимость принимать решения быстро и без полной информации, невозможность «купить»
          экспертизу с рынка. <span className="text-foreground">Смоллтех — это когда чего-то критически важного мало, и это не всегда люди или деньги.</span>
        </p>
      </section>

      {/* WHY THE NAME */}
      <section className="container-prose py-12">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">Что за название такое?</h2>
        <p className="mt-5 text-lg leading-relaxed text-foreground/90">
          Вопрос на стыке пиара и философии. Нам представляется важным следующее:{" "}
          <span className="text-gradient-amber font-semibold">назвать явление — значит признать его существование</span>.
          Существует понятие малых и средних технологических компаний, только звучит оно не так
          медийно, как «бигтех». Но и не так обидно, как «все остальные». Поэтому мы предлагаем
          смоллтех (и мидтех для ребят покрупнее).
        </p>
        <blockquote className="my-8 surface-card rounded-2xl p-6 sm:p-8">
          <Quote className="h-6 w-6 text-primary" />
          <p className="mt-3 font-display text-xl leading-snug sm:text-2xl text-balance">
            «Термин „смоллтех“ оказался довольно прилипчивым и лёгким. Хотя такого же краткого
            ответа на вопрос „а кто такой — смоллтех?“ мы ещё не придумали.»
          </p>
        </blockquote>
      </section>

      {/* PROBLEM */}
      <section className="container-prose py-12">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">А в чём, собственно, проблема?</h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            В условиях цифровой коммуникации, поисковых (и иишных) выдачей и изобилия информации
            если ты не на слуху — ты не существуешь. Для конечного пользователя продукта, для клиента
            или кандидата.
          </p>
          <p>
            На заре интернета «раскрутиться» и «залететь» было довольно легко, но сегодня плотность
            коммуникаций на душу населения зашкаливает.{" "}
            <span className="text-foreground">Гравитация бигтех-брендов настолько велика, что конкурентоспособность отдельно взятого маленького ноунейма ничтожна.</span>
          </p>
          <p>
            Оказавшись в точке, когда конкуренция неизбежна, но ресурсы заведомо недостаточны,
            компании идут по классическому пути: ведут блоги, участвуют в рейтингах, выступают на
            мероприятиях. Вот только чем крупнее конференция — тем сложнее отбор, а если ПК
            состоит преимущественно из больших экспертов крупных компаний, предвзятость неизбежна.
          </p>
          <p>
            У конечного инженера смоллтех-компании даже не остаётся весомой площадки для обмена
            опытом. Наш удел — узкотематические разрозненные митапы, удача работать с опытными
            коллегами и всё, что найдётся в интернете.
          </p>
        </div>
      </section>

      {/* FACTORS */}
      <section className="container-wide py-20 sm:py-24">
        <div className="container-prose px-0">
          <SectionHeading
            eyebrow="что беспокоит смоллтех"
            title="Четыре ключевых фактора"
            description="Мы провели исследование с двух сторон — со стороны технобренда и рядового инженера. Данные собраны методом 16 глубинных интервью и подтверждены кастдевами."
          />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {factors.map((f) => (
            <div key={f.n} className="surface-card relative overflow-hidden rounded-3xl p-7 sm:p-8">
              <div className="flex items-baseline justify-between">
                <span className="font-mono-tech text-xs text-muted-foreground">#{f.n}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-primary">фактор</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold sm:text-2xl">{f.title}</h3>
              <p className="mt-1 text-sm text-primary/90">{f.sub}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="container-prose py-12">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Что с этим можно сделать?</h2>
        <p className="mt-6 font-display text-3xl font-semibold text-gradient-amber sm:text-4xl">
          Соединяться.
        </p>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Смоллтех-объединение началось с небольшого чата на несколько соло-деврелов малых
            ИТ-компаний. Место поддержки и нестыдного обсуждения простых вопросов из разряда{" "}
            <em className="text-foreground">«а как существовать, если…»</em>.
          </p>
          <p>
            Весной 2025 года сообщество сформировалось в объединение для инженеров смоллтех-компаний
            и начало вести публичную деятельность.
          </p>
          <p className="text-foreground">
            Мы объединяем усилия, работаем «вскладчину», помогаем друг другу с генерацией идей,
            форматов, поиском ресурсов. Наши митапы — это сборная солянка из разнобрендового мерча,
            спикеров и идей. Мы убеждены, что конкуренцию с бигтехом не выдержать поодиночке.
          </p>
        </div>
      </section>

      <section className="container-prose pb-24 pt-8">
        <div className="surface-card rounded-3xl p-8 sm:p-10">
          <p className="font-display text-xl font-semibold leading-snug sm:text-2xl text-balance">
            Если вы разделяете цель и согласны со стратегией — мы приглашаем вас в сообщество.
            Будьте наблюдателем или активным участником, делитесь экспертизой или проблемой,
            вносите вклад в события или проект.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/join"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Присоединиться <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/research"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface/60 px-6 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Посмотреть исследование
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Manifesto;
