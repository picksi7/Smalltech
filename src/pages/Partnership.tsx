import {
  ArrowRight,
  BarChart3,
  Calendar,
  Handshake,
  MapPin,
  Megaphone,
  Mic,
  Send,
  Users,
  Wrench,
} from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Seo from "@/components/site/Seo";
import { OrganizationLd, BreadcrumbLd } from "@/components/site/JsonLd";

const Partnership = () => {
  return (
    <div className="anim-fade">
      <Seo
        title="Партнёрство со Смоллтех — для ИТ-компаний и организаторов"
        description="Форматы сотрудничества с сообществом Смоллтех. Партнёрство с Онтико, организатором HighLoad++ и других ведущих ИТ-конференций."
        path="/partnership"
        type="website"
        keywords="смоллтех, smalltech, партнёрство, Онтико, HighLoad++, ИТ-конференции"
      />
      <OrganizationLd />
      <BreadcrumbLd items={[{ name: 'Партнёрство', path: '/partnership' }]} />
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 -z-10 h-[420px] w-[520px] rounded-[55%] blob-violet-soft"
        />
        <div className="container-wide py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="chip-amber">
              <Handshake className="h-3.5 w-3.5" />
              партнёрство
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Где встречается <span className="text-gradient-amber">смоллтех</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
              Совместные мероприятия и эксклюзивные форматы участия в крупнейших ИТ-конференциях
              страны. Мы открываем смоллтехам двери, к которым раньше не было ключей.
            </p>
          </div>
        </div>
      </header>

      <section id="partnership_meetup" className="container-wide py-20 sm:py-24">
        <SectionHeading
          eyebrow="01 · ближайшее событие"
          title="Smalltech Meetup Vol.3: Аналитика"
          description="Третий митап сообщества — про аналитику в смоллтехе. Ждём прикладные темы и реализованные кейсы."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="surface-card relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber/15 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <span className="chip">
                <Mic className="h-3.5 w-3.5" /> Call for Papers
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
                Расскажите, чем живёте и чего достигаете подручными инструментами
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Ждём прикладные — именно к смоллтехам — темы и реализованные кейсы. Поделитесь
                тем, как ваши находки и решения могут помочь товарищам-аналитикам в маленьких ИТ.
                Без бигтех-бюджетов, без идеальных условий — про то, что работает на самом деле.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> когда
                  </div>
                  <p className="mt-2 font-display text-2xl font-semibold">28 мая</p>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> где
                  </div>
                  <p className="mt-2 font-display text-base font-semibold leading-tight">
                    Офис Петрович-Тех
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <Send className="h-3.5 w-3.5" /> дедлайн заявок
                  </div>
                  <p className="mt-2 font-display text-2xl font-semibold">13 мая</p>
                </div>
              </div>

              <a
                href="https://conf.ontico.ru/lectures/submit/external-xxexk7892X"
                target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Подать заявку <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="surface-card rounded-2xl p-6">
              <Users className="h-5 w-5 text-primary" />
              <h4 className="mt-3 font-display text-lg font-semibold">Кого особенно ждём</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Аналитикам, продакт-аналитикам, дата-инженерам и тимлидам аналитических команд из
                смолл- и мидтех-компаний.
              </p>
            </div>
            <div className="surface-card rounded-2xl p-6">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h4 className="mt-3 font-display text-lg font-semibold">О чём говорим</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Метрики, эксперименты, модели, дашборды, инструменты — всё, что вы построили
                подручными средствами и что можно повторить в похожем контексте.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="partnership_ontico" className="container-wide py-12 sm:py-20">
        <SectionHeading
          eyebrow="02 · эксклюзивное партнёрство"
          title="Смоллтех аллея на Saint HighLoad++ и Saint TeamLead"
          description="Онтико заключил с сообществом эксклюзивное партнёрство: Смоллтех получает возможность громко заявить о себе на крупнейших профильных конференциях Петербурга."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <a
            href="https://highload.ru/spb/2026"
            target="_blank" rel="noopener noreferrer"
            className="surface-card group relative overflow-hidden rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated sm:p-8"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
              <MapPin className="h-3.5 w-3.5" /> Санкт-Петербург
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
              Saint HighLoad++ 2026
            </h3>
            <p className="mt-2 font-mono-tech text-sm text-muted-foreground">22–23 июня 2026</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Профессиональная конференция разработчиков высоконагруженных систем. 1500–1700
              участников офлайн, 7–8 потоков докладов.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
              highload.ru/spb/2026
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          <a
            href="https://teamleadconf.ru/spb/2026"
            target="_blank" rel="noopener noreferrer"
            className="surface-card group relative overflow-hidden rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated sm:p-8"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
              <MapPin className="h-3.5 w-3.5" /> Санкт-Петербург
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
              Saint TeamLead 2026
            </h3>
            <p className="mt-2 font-mono-tech text-sm text-muted-foreground">25–26 июня 2026</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Главная конференция для тимлидов, инженерных менеджеров и технических директоров.
              Большая площадка — большой охват для смоллтеха.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
              teamleadconf.ru/spb/2026
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="surface-card rounded-3xl p-7 sm:p-8">
            <Megaphone className="h-5 w-5 text-primary" />
            <h4 className="mt-3 font-display text-lg font-semibold">Зонированное пространство</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Смоллтех-аллея — выделенная зона с единой концепцией в сердце большой бигтех-конференции.
              Вместе — заметнее и больше, чем поодиночке.
            </p>
          </div>
          <div className="surface-card rounded-3xl p-7 sm:p-8">
            <Users className="h-5 w-5 text-primary" />
            <h4 className="mt-3 font-display text-lg font-semibold">Peer-to-peer сборка</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Сквозная активность и общее представление смоллтехов — проектируем вместе. Не
              конкурируем, а сотрудничаем: компании-партнёры сами решают, как будет работать аллея.
            </p>
          </div>
          <div className="surface-card rounded-3xl p-7 sm:p-8">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h4 className="mt-3 font-display text-lg font-semibold">Рабочие метрики</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Трекинг контактов, конференционная аналитика, точечные вопросы в опросе участников и
              отчёт по результатам. Эффективность видно, а не «ну вроде неплохо».
            </p>
          </div>
        </div>

        <div className="mt-10 surface-card rounded-3xl p-8 sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div>
              <span className="chip-amber">
                <Mic className="h-3.5 w-3.5" /> программа
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
                Программный трек для инженеров смолл- и мидтеха
              </h3>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Внутри Saint HighLoad++ появится отдельный трек, спроектированный специально под
                контекст малых и средних компаний: реальные бюджеты, маленькие команды,
                нестандартные ограничения. Доклады, которые применимы у вас в понедельник, а не в
                «когда у нас будет отдельная платформенная команда».
              </p>
              <p>
                Программу собирает само сообщество — спикеры, темы и форматы определяются
                компаниями-партнёрами аллеи и активистами Смоллтеха.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <SectionHeading
            eyebrow="форматы интеграций"
            title="Стенды — это база, от которой можно отказаться"
            description="Стандартные стенды (Старт, Бронза, Серебро) — это базовая конструкция от организатора. Но это не догма: формат интеграции в аллею мы готовы менять под идеи самого сообщества."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="surface-card rounded-3xl p-7">
              <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary">пакет</p>
              <h4 className="mt-2 font-display text-xl font-semibold">Старт</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Место на общем стенде аллеи (до 3 м² на компанию), застройка под ключ, билеты для
                стендистов, информационный пост и общая email-рассылка по участникам.
              </p>
            </div>
            <div className="surface-card rounded-3xl p-7">
              <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary">пакет</p>
              <h4 className="mt-2 font-display text-xl font-semibold">Бронза</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Персональный стенд 3 м², всё из «Старта» плюс расширенные билеты, рекламный ролик
                и возможность сборки в кластеры по операционным или продуктовым областям.
              </p>
            </div>
            <div className="surface-card rounded-3xl p-7">
              <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary">пакет</p>
              <h4 className="mt-2 font-display text-xl font-semibold">Серебро</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Персональный стенд 6 м², максимум билетов, больше показов рекламного ролика, два
                информационных поста и приоритет в кластеризации внутри аллеи.
              </p>
            </div>
          </div>

          <div className="mt-8 surface-card relative overflow-hidden rounded-3xl border-primary/30 p-8 sm:p-10">
            <div
              className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber/15 blur-3xl"
              aria-hidden
            />
            <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Описанные пакеты — стандартная конструкция от организатора. Если сообщество
                  придумает другой формат интеграции в аллею — лекторий, демо-зону, мастерские,
                  челлендж, что угодно — мы готовы заменить стенды на это. Аллея проектируется
                  peer-to-peer: вы решаете, как она будет выглядеть.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide pb-24">
        <div className="surface-card relative overflow-hidden rounded-3xl px-8 py-12 sm:px-12 sm:py-14">
          <div
            className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-amber/15 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <span className="chip-amber">
                <Send className="h-3.5 w-3.5" /> по партнёрству
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl text-balance">
                По партнёрству на конференциях Онтико — пишите Лизе
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Расскажем подробнее про аллею, форматы участия, поможем выбрать или предложить свой.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="https://t.me/LisaTsareva"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Написать @LisaTsareva <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
