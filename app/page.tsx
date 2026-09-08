"use client"

import { useId, useState } from "react"
import { Youtube, Instagram, Phone } from "lucide-react"

/* ---------- retro vector marks ---------- */

function FlowerMark({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <g fill="currentColor">
        <circle cx="12" cy="12" r="2.4" />
        {Array.from({ length: 6 }).map((_, i) => (
          <ellipse key={i} cx="12" cy="12" rx="4.6" ry="8" transform={`rotate(${i * 30} 12 12)`} fill="none" stroke="currentColor" strokeWidth="1.6" />
        ))}
      </g>
    </svg>
  )
}

function StarMark({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2l2.6 6.2L21 8.3l-4.7 4.3 1.2 6.4L12 15.9l-5.5 3.1 1.2-6.4L2 8.3l6.4-.1L12 2z"
        fill="currentColor"
      />
    </svg>
  )
}

function Sunflower({ className = "", tilt = 0, flip = false }: { className?: string; tilt?: number; flip?: boolean }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "f")
  const petal = `${uid}-petal`
  const seeds = `${uid}-seeds`
  return (
    <svg viewBox="0 0 400 400" className={className} style={{ transform: `rotate(${tilt}deg) ${flip ? "scale(-1,1)" : ""}` }} aria-hidden>
      <defs>
        <path id={`${petal}-outer`} d="M200 200 C 162 158 166 66 200 12 C 234 66 238 158 200 200 Z" />
        <path id={`${petal}-inner`} d="M200 200 C 172 168 174 96 200 52 C 226 96 228 168 200 200 Z" />
        <pattern id={seeds} width="13" height="13" patternUnits="userSpaceOnUse" patternTransform="rotate(22.5)">
          <circle cx="6.5" cy="6.5" r="3" fill="#4a2c12" />
        </pattern>
      </defs>
      <g fill="#e8a92c" stroke="#7a1a1e" strokeWidth="1.5">
        {Array.from({ length: 24 }).map((_, i) => (
          <use key={`o${i}`} href={`#${petal}-outer`} transform={`rotate(${i * 15} 200 200)`} />
        ))}
      </g>
      <g fill="#f2c14e" stroke="#7a1a1e" strokeWidth="1">
        {Array.from({ length: 24 }).map((_, i) => (
          <use key={`i${i}`} href={`#${petal}-inner`} transform={`rotate(${7.5 + i * 15} 200 200)`} />
        ))}
      </g>
      <circle cx="200" cy="200" r="98" fill="url(#seeds)" />
      <circle cx="200" cy="200" r="98" fill="none" stroke="#3a2410" strokeWidth="4" />
      <circle cx="200" cy="200" r="14" fill="#3a2410" />
    </svg>
  )
}

function WavyLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 30" className={className} aria-hidden preserveAspectRatio="none">
      <path d="M0 15 Q 18 0 37 15 T 74 15 T 111 15 T 148 15 T 185 15 T 220 15" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

function CurvedStripe({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 120" className={className} aria-hidden preserveAspectRatio="none">
      <path d="M-20 100 C 80 40 200 130 320 20" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
    </svg>
  )
}

function CornerMarks({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-4 ${className}`} aria-hidden>
      <span className="absolute top-0 left-0 text-2xl font-display text-ink/50">✚</span>
      <span className="absolute top-0 right-0 text-2xl font-display text-ink/50">✚</span>
      <span className="absolute bottom-0 left-0 text-2xl font-display text-ink/50">✚</span>
      <span className="absolute bottom-0 right-0 text-2xl font-display text-ink/50">✚</span>
    </div>
  )
}

/* ---------- copy ---------- */

export default function Portfolio() {
  const [lang, setLang] = useState<"en" | "ar">("en")

  const t = {
    en: {
      nav: { home: "Home", about: "About", work: "Work", clients: "Clients", contact: "Contact" },
      hero: {
        kicker: "Freelance Video Editor",
        title: ["OBAY", "THE", "EDITOR"],
        subtitle: "Video Editor & Motion Designer",
        cta: "View My Work",
        handle: "@ob4yy",
      },
      marquee: ["Video Editor", "Motion Designer", "Color Grading", "Sound Design", "Post Production"],
      work: { label: "Selected Work", title: "RECENT WORK" },
      about: {
        label: "About",
        title: "The man behind the cut",
        desc: "I deliver the quality you aspire for in your videos, in the shortest time possible.",
        skills: ["Video Editing", "Motion Graphics", "Color Grading"],
        tag: "Since forever, before the ink dried.",
      },
      clients: { label: "Clients", title: "WORKED WITH GREAT NAMES" },
      contact: {
        title: "LET'S MAKE",
        title2: "SOMETHING GREAT",
        desc: "Got a project in mind? Tell me about it.",
        cta: "Start a project",
      },
      footer: { rights: "All rights reserved.", made: "Printed with love" },
    },
    ar: {
      nav: { home: "الرئيسية", about: "عني", work: "أعمالي", clients: "العملاء", contact: "تواصل" },
      hero: {
        kicker: "مونتاج فريلانس",
        title: ["أُبي", "المحرر"],
        subtitle: "ممنتج فيديو و مصمم موشن",
        cta: "شاهد أعمالي",
        handle: "@ob4yy",
      },
      marquee: ["مونتاج فيديو", "موشن جرافيك", "تصحيح ألوان", "تصميم صوت", "ما بعد الإنتاج"],
      work: { label: "أعمال مختارة", title: "أحدث الأعمال" },
      about: {
        label: "عني",
        title: "الرجل اللي ورا القص",
        desc: "اقدر اعطيك الجودة الي تطمح لها في فيديوهاتك في اقصر مدة ممكنة",
        skills: ["مونتاج فيديو", "موشن جرافيك", "تصحيح ألوان"],
        tag: "من زمان، قبل ما يجف الحبر.",
      },
      clients: { label: "العملاء", title: "عملت مع أسماء رائعة" },
      contact: {
        title: "خلّنا نصنع",
        title2: "شيء رائع",
        desc: "عندك مشروع بالبال؟ احكيني عنه.",
        cta: "ابدأ المشروع",
      },
      footer: { rights: "جميع الحقوق محفوظة.", made: "مطبوعة بحب" },
    },
  }

  const content = t[lang]
  const isRtl = lang === "ar"

  const videos = [
    "1Fj3xgRB6Ns",
    "7KpejS6hJts",
    "3WdJP2RCkTE",
    "sTXAaMNVxgs",
    "K46iSyGqF30",
    "0NP4aEzKxhU",
    "EiiYnmJUdrk",
    "jLtxEB4f_dE",
  ]

  const clients = [
    { id: 1, src: "/client-logo-1.png", alt: "Client", size: "h-24" },
    { id: 2, src: "/reybad-logo.png", alt: "Reybad Gaming", size: "h-28" },
    { id: 3, src: "/client-logo-3.png", alt: "Client", size: "h-24" },
    { id: 4, src: "/inspire-logo.png", alt: "Inspire", size: "h-16" },
  ]

  const socials = [
    { id: "yt", href: "https://www.youtube.com/@OB4Y", label: "YouTube", Icon: Youtube, num: "01" },
    { id: "ig", href: "https://www.instagram.com/ob4yy/", label: "@ob4yy", Icon: Instagram, num: "02" },
    { id: "wa", href: "https://wa.me/218912518867", label: "WhatsApp", Icon: Phone, num: "03" },
  ]

  return (
    <div className={`paper-grain min-h-screen bg-background text-foreground font-sans`} dir={isRtl ? "rtl" : "ltr"}>
      {/* ======= NAV ======= */}
      <nav className="print-outline sticky top-0 z-50 bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <img src="/obay-logo.png" alt="Obay logo" className="w-16 h-16 object-contain group-hover:rotate-6 transition-transform duration-300" />
            <span className="font-display text-2xl tracking-wide uppercase">{isRtl ? "أُبي" : "Obay"}</span>
            <span className="relative top-1 text-crimson" aria-hidden>✶</span>
          </a>

          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {(["home", "about", "work", "clients"] as const).map((k) => (
                <a
                  key={k}
                  href={`#${k === "home" ? "home" : k}`}
                  className="text-sm font-semibold uppercase tracking-[0.2em] relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-crimson hover:after:w-full after:transition-all"
                >
                  {content.nav[k]}
                </a>
              ))}
            </div>
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="rounded-full bg-crimson text-cream px-5 py-2 text-sm font-semibold uppercase tracking-widest print-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* ======= HERO ======= */}
        <section id="home" className="relative overflow-hidden border-b-2 border-ink">
          <CornerMarks />

          {/* left sunflower */}
          <div className="mobile-flower pointer-events-none absolute left-0 top-[42%] -translate-y-1/2 -translate-x-[48%] w-[48vw] max-w-[900px] opacity-75 blur-[1.5px] select-none md:top-1/2 md:-translate-x-[38%] md:w-[76vw] md:opacity-95 md:blur-0">
            <Sunflower className="w-full h-full" tilt={-16} />
          </div>
          {/* right sunflower */}
          <div className="mobile-flower pointer-events-none absolute right-0 top-[54%] -translate-y-1/2 translate-x-[48%] w-[40vw] max-w-[720px] opacity-70 blur-[2px] select-none md:top-[45%] md:translate-x-[38%] md:w-[62vw] md:opacity-90 md:blur-0">
            <Sunflower className="w-full h-full" tilt={20} flip />
          </div>

          {/* retro geometric decorations */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <CurvedStripe className="absolute -bottom-6 left-0 w-64 text-crimson opacity-80" />
            <CurvedStripe className="absolute top-16 right-[24%] w-40 text-crimson opacity-60 rotate-[160deg]" />
            <WavyLine className="absolute top-8 left-[12%] w-36 text-ink" />
            <WavyLine className="absolute bottom-24 right-[10%] w-44 text-maroon" />
            <StarMark className="absolute top-[18%] right-[16%] w-7 h-7 text-crimson" />
            <StarMark className="absolute bottom-[20%] left-[18%] w-5 h-5 text-ink" />
            <span className="absolute top-[30%] left-[6%] w-5 h-5 rounded-full bg-sun border border-ink" />
            <span className="absolute bottom-[32%] right-[6%] w-3 h-3 rounded-full bg-crimson" />
            <span className="absolute top-[12%] left-[38%] text-ink/60 font-display text-xl">✶</span>
            <span className="absolute bottom-[14%] right-[38%] text-ink/60 font-display text-lg">✶</span>
            {/* wavy line crossing the title left side */}
            <svg viewBox="0 0 220 30" className="absolute left-[10%] top-[62%] w-48 text-crimson" preserveAspectRatio="none" aria-hidden>
              <path d="M0 15 Q 18 0 37 15 T 74 15 T 111 15 T 148 15 T 185 15 T 220 15" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
            {/* horizontal bars */}
            <div className="absolute left-0 top-[46%] h-3 w-40 bg-sun border-y border-ink" />
            <div className="absolute right-0 top-[58%] h-2 w-28 bg-maroon" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 pt-20 pb-24 sm:px-6 md:pt-32 md:pb-36 flex flex-col items-center text-center">
            <p className="flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.4em] text-maroon">
              <WavyLine className="w-12 text-crimson" />
              {content.hero.kicker}
              <WavyLine className="w-12 text-crimson" />
            </p>

            <h1 className="misprint mt-6 font-display uppercase leading-[0.82] text-crimson select-none">
              <span className="block text-[clamp(4rem,15vw,11rem)]">{content.hero.title[0]}</span>
              <span className="block text-[clamp(3rem,11vw,8rem)]">
                {content.hero.title[1]} <span className="text-ink">{content.hero.title[2]}</span>
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-3" aria-hidden>
              <StarMark className="w-4 h-4 text-crimson" />
              <p className="uppercase tracking-[0.35em] text-sm md:text-base text-ink font-semibold">
                {content.hero.subtitle}
              </p>
              <StarMark className="w-4 h-4 text-crimson" />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <a
                href="#work"
                className="halftone rounded-full bg-crimson text-cream print-shadow px-9 py-4 font-semibold uppercase tracking-[0.2em] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                {content.hero.cta}
              </a>
              <a
                href="https://www.instagram.com/ob44y/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-sun text-ink print-shadow px-8 py-4 font-semibold uppercase tracking-[0.2em] border-2 border-ink hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                {content.hero.handle}
              </a>
            </div>

            {/* offset print swatch */}
            <div className="mt-12 flex items-center gap-2 text-2xl select-none" aria-hidden>
              <span className="text-crimson">✶</span>
              <span className="h-2 w-16 bg-ink inline-block -rotate-2" />
              <span className="text-maroon">✶</span>
              <span className="w-5 h-5 rounded-full bg-sun border border-ink inline-block" />
              <span className="text-crimson">✶</span>
              <span className="h-2 w-16 bg-ink inline-block rotate-1" />
              <span className="text-maroon">✶</span>
            </div>
          </div>
        </section>

        {/* ======= MARQUEE ======= */}
        <div className="print-outline relative -rotate-1 bg-sun py-3 border-x-0 overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap w-max">
            {[0, 1].map((n) => (
              <div key={n} className="flex items-center gap-6 pr-6">
                {content.marquee.map((m) => (
                  <span key={m} className="flex items-center gap-6 font-display uppercase tracking-[0.25em] text-ink">
                    {m} <StarMark className="w-3.5 h-3.5 text-crimson" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ======= WORK ======= */}
        <section id="work" className="relative py-24 md:py-28 px-6 border-b-2 border-ink bg-paper">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex items-end justify-between gap-6">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-maroon">
                  <StarMark className="w-4 h-4" />
                  {content.work.label}
                </p>
                <h2 className="misprint mt-3 font-display uppercase leading-none text-crimson text-[clamp(2.5rem,8vw,5.5rem)]">
                  {content.work.title}
                </h2>
              </div>
              <div className="hidden md:block" aria-hidden>
                <CurvedStripe className="w-40 text-crimson opacity-70" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
              {videos.map((videoId, index) => (
                <div key={videoId} className={`group ${index % 2 === 1 ? "md:translate-y-8" : ""}`}>
                  <div className="print-outline bg-cream print-shadow-sm transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between border-b-2 border-ink px-4 py-2 bg-sun">
                      <span className="font-display uppercase tracking-widest text-sm text-ink">
                        {isRtl ? "عمل" : "Work"} — 0{index + 1}
                      </span>
                      <FlowerMark className="w-4 h-4 text-maroon" />
                    </div>
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`Video ${index + 1}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="halftone-soft flex items-center justify-between border-t-2 border-ink px-4 py-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <StarMark className="w-3.5 h-3.5 text-crimson" />
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">{isRtl ? "فيديو" : "Video"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======= ABOUT ======= */}
        <section id="about" className="relative py-24 md:py-28 px-6 border-b-2 border-ink">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`relative mx-auto w-full max-w-md ${isRtl ? "lg:order-2" : ""}`}>
              <div className="absolute -inset-3 bg-sun print-shadow-sm" aria-hidden />
              <div className="relative print-outline bg-cream halftone-soft">
                <div className="flex justify-between items-center px-4 py-2 border-b-2 border-ink bg-maroon text-cream">
                  <span className="font-display uppercase tracking-widest text-xs">Obay</span>
                  <StarMark className="w-3.5 h-3.5" />
                </div>
                <img src="/obay-coffee-drawing.png" alt="Obay drinking coffee" className="w-full object-contain mix-blend-multiply" />
                <p className="border-t-2 border-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]">
                  {content.about.tag}
                </p>
              </div>
              <FlowerMark className="absolute -top-4 -right-4 w-6 h-6 text-crimson" />
              <FlowerMark className="absolute -bottom-4 -left-4 w-6 h-6 text-crimson" />
            </div>

            <div className={isRtl ? "lg:order-1" : ""}>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-maroon">
                <StarMark className="w-4 h-4" />
                {content.about.label}
              </p>
              <h2 className="misprint mt-3 font-display uppercase leading-[0.9] text-crimson text-[clamp(2.2rem,6vw,4.5rem)]">
                {content.about.title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/90">{content.about.desc}</p>

              <div className="mt-10 space-y-4">
                {content.about.skills.map((skill, i) => (
                  <div key={skill} className="flex items-center gap-4 print-outline bg-cream px-5 py-3 print-shadow-sm">
                    <span className="font-display text-crimson text-xl">{`0${i + 1}`}</span>
                    <span className="w-px self-stretch bg-ink" />
                    <span className="font-semibold uppercase tracking-[0.25em] text-ink">{skill}</span>
                    <StarMark className="ms-auto w-4 h-4 text-sun" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======= CLIENTS ======= */}
        <section id="clients" className="relative py-24 md:py-28 px-6 border-b-2 border-ink bg-paper">
          <div className="mx-auto max-w-7xl">
            <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-maroon">
              <StarMark className="w-4 h-4" />
              {content.clients.label}
              <StarMark className="w-4 h-4" />
            </p>
            <h2 className="text-center misprint mt-3 font-display uppercase leading-none text-crimson text-[clamp(2rem,6vw,4rem)]">
              {content.clients.title}
            </h2>

            <div className="mt-14 flex items-center justify-center gap-10 md:gap-16 flex-wrap">
              {clients.map((client, i) => (
                <div key={client.id} className="relative">
                  <div className="flex items-center gap-2 mb-1" aria-hidden>
                    <span className="text-crimson font-display text-sm">{`0${i + 1}`}</span>
                    <span className="w-3 h-3 bg-sun border border-ink rotate-45" />
                  </div>
                  <img
                    src={client.src}
                    alt={client.alt}
                    className={`${client.size} w-auto object-contain mix-blend-multiply contrast-[0.6] brightness-[0.85]`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======= CONTACT ======= */}
        <section id="contact" className="relative overflow-hidden py-24 md:py-32 px-6">
          <CornerMarks />
          <div className="mobile-flower pointer-events-none absolute -right-10 -top-8 w-[30vw] max-w-[520px] opacity-60 blur-[1.5px] select-none md:-right-16 md:-top-16 md:w-[42vw] md:opacity-80 md:blur-0" aria-hidden>
            <Sunflower className="w-full h-full" tilt={-24} />
          </div>
          <div className="mobile-flower pointer-events-none absolute -left-8 -bottom-12 w-[22vw] max-w-[380px] opacity-45 blur-[2px] select-none md:-left-10 md:-bottom-20 md:w-[30vw] md:opacity-60 md:blur-0" aria-hidden>
            <Sunflower className="w-full h-full" tilt={30} flip />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-maroon">
              <WavyLine className="w-12 text-crimson" />
              {content.contact.cta}
              <WavyLine className="w-12 text-crimson" />
            </p>
            <h2 className="misprint mt-4 font-display uppercase leading-[0.85] text-crimson text-[clamp(2.8rem,10vw,7rem)]">
              {content.contact.title}
              <span className="block text-ink">{content.contact.title2}</span>
            </h2>
            <p className="mt-6 text-lg text-ink/90">{content.contact.desc}</p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="print-outline bg-cream print-shadow px-6 py-5 flex flex-col items-center gap-3 hover:bg-sun transition-colors"
                >
                  <s.Icon className="w-6 h-6 text-crimson" />
                  <span className="font-semibold uppercase tracking-[0.2em] text-ink">{s.label}</span>
                  <span className="text-maroon text-xs font-display">/{s.num}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ======= FOOTER ======= */}
      <footer className="print-outline border-x-0 border-t-2 bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-crimson text-cream">
              <FlowerMark className="w-5 h-5" />
            </span>
            <span className="font-display text-2xl uppercase">{isRtl ? "أُبي" : "Obay"}</span>
            <span className="text-sun" aria-hidden>✶</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {(["home", "work", "clients", "contact"] as const).map((k) => (
              <a key={k} href={`#${k === "home" ? "home" : k}`}
                 className="text-sm font-semibold uppercase tracking-[0.2em] hover:text-sun transition-colors">
                {content.nav[k]}
              </a>
            ))}
          </div>

          <div className="flex gap-5">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center w-10 h-10 rounded-full border-2 border-cream/70 hover:bg-crimson hover:border-crimson transition-colors"
                aria-label={s.label}
              >
                <s.Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-cream/20">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-cream/60">
            <p>© 2025 {isRtl ? "أُبي" : "Obay"}. {content.footer.rights}</p>
            <p className="flex items-center gap-2">
              <StarMark className="w-3 h-3 text-sun" />
              {content.footer.made}
              <StarMark className="w-3 h-3 text-crimson" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
