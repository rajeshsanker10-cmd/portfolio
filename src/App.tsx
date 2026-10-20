import { useState, useEffect, useRef } from "react"
import resumeUrl from "@/imports/Resume.pdf"
import reelUrl from "@/imports/Rajesh_Shankar.mp4"
import fastagThumb from "@/imports/image-11.png"
import luluThumb from "@/imports/image-12.png"
import connectThumb from "@/imports/Dark_Gradient_03.png"
import portrait from "@/imports/image-15.png"
import reviewtricsApp from "@/imports/image-23.png"
import reviewtricsSite from "@/imports/image-24.png"
import community16 from "@/imports/image-16.png"
import community17 from "@/imports/image-17.png"
import community18 from "@/imports/image-18.png"
import community19 from "@/imports/image-19.png"
import community20 from "@/imports/image-20.png"
import community21 from "@/imports/image-21.png"
import community22 from "@/imports/image-22.png"

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
]

type Audience = { key: string; statement: React.ReactNode }

const AUDIENCES: Audience[] = [
  {
    key: "For anyone",
    statement: (
      <>
        Hi, I&apos;m Rajesh — a product designer who makes complex things feel{" "}
        <span className="text-acid">simple.</span>
      </>
    ),
  },
  {
    key: "Recruiters",
    statement: (
      <>
        I&apos;m a Lead Product Designer with 7+ years across B2C &amp; B2B
        products, now at M2P Fintech. I&apos;m{" "}
        <span className="text-acid">open to senior &amp; lead roles.</span>
      </>
    ),
  },
  {
    key: "Design Directors",
    statement: (
      <>
        I set a high bar for craft and love growing designers. I treat design
        systems as infrastructure and stay calm in{" "}
        <span className="text-acid">complex, ambiguous work.</span>
      </>
    ),
  },
  {
    key: "Product Designers",
    statement: (
      <>
        I&apos;m a systems thinker with a high bar for quality. From research to
        pixels, I&apos;ll collaborate with you, learn from you, and{" "}
        <span className="text-acid">ship something we&apos;re proud of.</span>
      </>
    ),
  },
  {
    key: "Product Managers",
    statement: (
      <>
        I bring end-to-end product thinking — strategy, discovery, delivery. I
        partner closely to turn hard problems into{" "}
        <span className="text-acid">experiences people actually trust.</span>
      </>
    ),
  },
  {
    key: "Engineers",
    statement: (
      <>
        I design with feasibility in mind and speak your language — tokens,
        components, states, edge cases. I&apos;ll hand off work that&apos;s{" "}
        <span className="text-acid">a pleasure to build.</span>
      </>
    ),
  },
]

const CLIENTS = [
  "M2P Fintech",
  "SBI Card",
  "ICICI Bank",
  "IDFC",
  "Finflux",
  "YES Bank",
  "Alizz Bank",
  "OHB Bank",
  "Vistaas",
]

const STATS = [
  { value: "7+", label: "Years designing digital products" },
  { value: "4", label: "Designers led at M2P Fintech" },
  { value: "10+", label: "Products shipped, end to end" },
  { value: "500+", label: "Designers connected via Madrasters" },
]

type Project = {
  title: string
  summary: string
  tags: string[]
  image: string
  link: string
  playstore?: string
}

const PROJECTS: Project[] = [
  {
    title: "App for buying and maintaining FASTag",
    summary:
      "The purpose of this case study is to demonstrate my ability to tackle real-world business challenges through user-centric design.",
    tags: ["Case study", "Mobile app", "Fintech", "Side project"],
    image: fastagThumb,
    link: "https://www.behance.net/gallery/181677177/Buy-FASTag-app-design-Case-study",
  },
  {
    title: "Lulu Money Mobile App Design",
    summary:
      "The one-stop solution for all international money transfers in a simpler and safer manner.",
    tags: ["Case study", "Mobile app", "Fintech", "Client project"],
    image: luluThumb,
    link: "https://www.behance.net/gallery/254438201/Lulu-Money-Mobile-App-Design",
    playstore: "https://play.google.com/store/search?q=lulu%20money&c=apps",
  },
  {
    title: "Connect — Case Management Portal",
    summary:
      "A next-generation case management portal that streamlines onboarding — letting teams build, create, and manage applications from a single, reimagined workspace.",
    tags: ["Case study", "Web app", "Enterprise", "Client project"],
    image: connectThumb,
    link: "https://www.figma.com/proto/ElIRK1boOTJBJLZSzuzPZK/Connect-Revamp?node-id=1245-39808&p=f&viewport=154%2C228%2C0.03&t=bGcf6dHWYRdTQSGw-1&scaling=scale-down&content-scaling=fixed&page-id=96%3A766&starting-point-node-id=1245%3A39808",
  },
]


const TESTIMONIALS = [
  {
    quote:
      "Working with Rajesh has been an absolute pleasure. His creativity, combined with his deep understanding of user experience, has elevated our product to the next level. He's proactive, collaborative, and always delivers with precision and quality.",
    name: "Jeevan",
    org: "Chairman at Madrasters & Principal Designer at M2P Fintech",
  },
  {
    quote:
      "Exceptional talent for balancing aesthetics with functionality. His designs not only look great but also enhance the overall user experience. His design thinking and problem-solving skills make him an indispensable member of our team.",
    name: "Jack Anto",
    org: "Founder at Madrasters Community & Head of Design at M2P Fintech",
  },
  {
    quote:
      "I've had the privilege of working with Rajesh Sankar, and his expertise in UI/UX design truly stands out. He consistently delivers modern, user-friendly interfaces and handles projects with great dedication. His approachable nature, creativity, and professionalism make him a true asset to any team.",
    name: "Ganesh M",
    org: "Principal / Lead Product Designer",
  },
  {
    quote:
      "Rajesh is a dynamic product designer who consistently brings fresh ideas and thoughtful design solutions to the table. His ability to transform complex requirements into user-friendly designs has been invaluable to our projects. He's a true asset to any team!",
    name: "Nandhini",
    org: "Designer at Publicis Sapient",
  },
  {
    quote:
      "Rajesh is creative and highly solution oriented, with his catchy and innovative designs, he helped us ideate and plan our product well. A really good team member & a valuable resource for our organization.",
    name: "Mithun",
    org: "Product Manager at Zeta",
  },
  {
    quote:
      "Rajesh has a great eye for design and is extremely user oriented in his approach. Also his attention to detail and sense of interface design is astounding.",
    name: "Nesar Ahmed",
    org: "Product Design Consultant",
  },
]

// ─── RS logo mark ──────────────────────────────────────────────────────────
function RsLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Rajesh Sankar"
    >
      <rect width="80" height="80" rx="16" fill="#0d0a12"/>
      {/* R — white */}
      <path d="M 13,16 L 13,64" stroke="white" strokeWidth="9" strokeLinecap="round"/>
      <path d="M 13,16 C 13,16 40,16 40,30 C 40,44 13,44 13,44"
        stroke="white" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M 22,44 L 38,64" stroke="white" strokeWidth="8" strokeLinecap="round"/>
      {/* S — accent purple */}
      <path
        d="M 68,20 C 74,14 48,14 48,28 C 48,42 72,42 72,52 C 72,66 50,66 50,60"
        stroke="var(--color-acid, #a855f7)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ─── accent presets ────────────────────────────────────────────────────────
type AccentPreset = {
  id: string
  label: string
  solid: string           // used as CSS --color-acid
  solidDeep: string       // used as CSS --color-acid-deep
  gradient?: string       // if set, applied to bg elements
}

const ACCENT_PRESETS: AccentPreset[] = [
  // flat
  { id: "purple",  label: "Purple",      solid: "#a855f7", solidDeep: "#9333ea" },
  { id: "lime",    label: "Acid Lime",   solid: "#d6fb5c", solidDeep: "#b8e03a" },
  { id: "blue",    label: "Electric",    solid: "#3b82f6", solidDeep: "#2563eb" },
  { id: "coral",   label: "Coral",       solid: "#ff5c38", solidDeep: "#e04020" },
  { id: "cyan",    label: "Cyan",        solid: "#06b6d4", solidDeep: "#0891b2" },
  { id: "gold",    label: "Gold",        solid: "#f59e0b", solidDeep: "#d97706" },
  { id: "pink",    label: "Pink",        solid: "#ec4899", solidDeep: "#db2777" },
  { id: "mint",    label: "Mint",        solid: "#10b981", solidDeep: "#059669" },
  // gradients
  { id: "grad-pp", label: "Cosmic",      solid: "#a855f7", solidDeep: "#9333ea", gradient: "linear-gradient(135deg,#a855f7,#ec4899)" },
  { id: "grad-bc", label: "Ocean",       solid: "#3b82f6", solidDeep: "#2563eb", gradient: "linear-gradient(135deg,#3b82f6,#06b6d4)" },
  { id: "grad-oy", label: "Sunset",      solid: "#f97316", solidDeep: "#ea580c", gradient: "linear-gradient(135deg,#f97316,#f59e0b)" },
  { id: "grad-gm", label: "Aurora",      solid: "#10b981", solidDeep: "#059669", gradient: "linear-gradient(135deg,#10b981,#3b82f6)" },
]

function applyAccent(preset: AccentPreset, theme: string) {
  const root = document.documentElement
  // light mode uses darker shade for contrast
  const isLight = theme === "light"
  root.style.setProperty("--color-acid", isLight ? preset.solidDeep : preset.solid)
  root.style.setProperty("--color-acid-deep", preset.solidDeep)

  // remove old injected gradient style
  document.getElementById("accent-gradient-style")?.remove()
  if (preset.gradient) {
    const style = document.createElement("style")
    style.id = "accent-gradient-style"
    style.textContent = `
      .accent-bg { background: ${preset.gradient} !important; }
      .accent-text {
        background: ${preset.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .accent-border { border-color: transparent !important; background-clip: padding-box; }
      ::selection { background: ${preset.solid}; color: #fff; }
    `
    document.head.appendChild(style)
  }
}

// ─── icons ─────────────────────────────────────────────────────────────────
function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}
function PaletteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  )
}

// ─── floating theme customizer ─────────────────────────────────────────────
function ThemeCustomizer({
  theme, toggleTheme, accent, setAccent,
}: {
  theme: string
  toggleTheme: () => void
  accent: AccentPreset
  setAccent: (p: AccentPreset) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const flat = ACCENT_PRESETS.filter((p) => !p.gradient)
  const grads = ACCENT_PRESETS.filter((p) => p.gradient)

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* expanded colour panel */}
      {open && (
        <div
          className="mb-1 w-64 rounded-2xl border border-line bg-ink-card/95 p-5 shadow-2xl backdrop-blur"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}
        >
          {/* flat colours */}
          <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">Flat</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {flat.map((p) => (
              <button
                key={p.id}
                title={p.label}
                onClick={() => setAccent(p)}
                className="relative h-7 w-7 rounded-full transition-transform hover:scale-110"
                style={{ background: p.solid }}
              >
                {accent.id === p.id && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-white/90 shadow" />
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* gradients */}
          <div className="mb-1 mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">Gradient</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {grads.map((p) => (
              <button
                key={p.id}
                title={p.label}
                onClick={() => setAccent(p)}
                className="relative h-7 w-7 rounded-full transition-transform hover:scale-110"
                style={{ background: p.gradient }}
              >
                {accent.id === p.id && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-white/90 shadow" />
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-4 border-t border-line pt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-fog/60">
            {accent.label}
          </div>
        </div>
      )}

      {/* dark / light FAB — sits above palette FAB */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark / light mode"
        title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink-card text-fog shadow-lg transition-all hover:text-paper"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>

      {/* palette FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Customise accent colour"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink-card text-fog shadow-lg transition-all hover:text-paper"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }}
      >
        {open ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <PaletteIcon />
        )}
      </button>
    </div>
  )
}

// ─── top bar ───────────────────────────────────────────────────────────────
function TopBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <RsLogo size={36} />
          <span className="max-w-0 overflow-hidden whitespace-nowrap font-display text-base font-extrabold tracking-tight text-paper opacity-0 transition-all duration-300 ease-out group-hover:max-w-xs group-hover:opacity-100">
            Rajesh Sankar<span className="text-acid">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-mono text-xs uppercase tracking-[0.18em] text-fog transition-colors hover:text-paper"
            >
              {n.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="accent-bg rounded-full bg-acid px-5 py-2 font-display text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Résumé
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs uppercase tracking-[0.18em] text-paper md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink/95 px-6 py-6 backdrop-blur md:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold text-paper"
              >
                {n.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-display text-2xl font-bold text-acid"
            >
              Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const [active, setActive] = useState(0)
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Audience switcher */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line pb-6 pt-6">
          {AUDIENCES.map((a, i) => (
            <button
              key={a.key}
              onClick={() => setActive(i)}
              className={`font-display text-base font-bold tracking-tight transition-colors md:text-lg ${
                i === active
                  ? "text-paper"
                  : "text-fog hover:text-paper/70"
              }`}
            >
              {a.key}
            </button>
          ))}
        </div>

        {/* Audience-tailored statement */}
        <h1
          key={active}
          className="mt-10 min-h-[3em] font-display text-[10.5vw] font-extrabold leading-[0.94] tracking-[-0.03em] md:min-h-[2.2em] md:text-[5.6vw]"
        >
          {AUDIENCES[active].statement}
        </h1>

        <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-[1.4fr_1fr]">
          <p className="max-w-xl text-lg leading-relaxed text-paper/80">
            Seven years turning complex problems into products people trust —
            across consumer apps, enterprise tools, and everything in between.
            I make complexity feel honest, and I build it to scale.
          </p>
          <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
            <a
              href="#work"
              className="font-display text-base font-bold text-paper underline decoration-acid decoration-2 underline-offset-4 transition-colors hover:text-acid"
            >
              See selected work ↓
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.18em] text-fog transition-colors hover:text-paper"
            >
              Download résumé
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 border-y border-line py-5">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={i}
                className="mx-8 font-display text-2xl font-semibold text-fog"
              >
                {c}
                <span className="mx-8 text-acid">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
      <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="border-l border-line pl-5">
            <div className="font-display text-5xl font-extrabold tracking-tight text-paper md:text-6xl">
              {s.value}
            </div>
            <div className="mt-2 max-w-[14ch] text-sm leading-snug text-fog">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group border-t border-line py-14 md:py-20">
      <div className="flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-line px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-fog"
          >
            {t}
          </span>
        ))}
      </div>

      <h3 className="mt-6 max-w-3xl font-display text-3xl font-extrabold leading-[1.02] tracking-tight md:text-5xl">
        {p.title}
      </h3>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/70">
        {p.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="accent-bg rounded-full bg-acid px-6 py-2.5 font-display text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
        >
          View project ↗
        </a>
        {p.playstore && (
          <a
            href={p.playstore}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-6 py-2.5 font-display text-sm font-bold text-paper transition-colors hover:border-paper/40"
          >
            Play Store ↗
          </a>
        )}
      </div>

      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        className="mt-12 block overflow-hidden rounded-2xl border border-line bg-ink-soft"
      >
        <img
          src={p.image}
          alt={`${p.title} preview`}
          className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />
      </a>
    </article>
  )
}

function Reel() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-12 md:px-10">
      <div className="mb-6 flex items-end justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-fog">
          Showreel
        </span>
        <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-fog md:block">
          A minute through the work
        </span>
      </div>
      <div className="overflow-hidden rounded-2xl border border-line bg-ink-soft">
        <video
          src={reelUrl}
          className="pointer-events-none aspect-video w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 md:px-10">
      <div className="flex items-end justify-between border-b border-line pb-6">
        <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          Selected work
        </h2>
        <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-fog md:block">
          Full case studies on Behance
        </span>
      </div>
      {PROJECTS.map((p) => (
        <ProjectCard key={p.title} p={p} />
      ))}
      <p className="border-t border-line py-10 text-sm text-fog">
        More work sits under NDA — happy to walk through the process,
        constraints, and outcomes live.
      </p>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper text-ink">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:px-10 md:py-32">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
            About
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl bg-ink/5">
            <img
              src={portrait}
              alt="Portrait of Rajesh Sankar"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            I&apos;m Rajesh — a product designer who likes the hard problems
            most people would rather skip.
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/75">
            <p>
              Over seven years I&apos;ve designed digital products across India
              and the GCC — from consumer apps to enterprise tools. Today
              I&apos;m an Associate Manager of Product Design at M2P Fintech,
              leading a team of four and shipping apps end to end.
            </p>
            <p>
              I&apos;m drawn to the messy parts — the constraints, the edge
              cases, the fine print — because that&apos;s where trust is won or
              lost. I work in systems, and outside the file I mentor with the
              Madrasters community, where I&apos;ve connected 500+ designers.
            </p>
            <p>
              If there&apos;s one thing that carries me through both design and
              the gym, it&apos;s <strong className="text-ink">consistency</strong>{" "}
              — the secret ingredient that keeps me on track. When I&apos;m not
              designing you&apos;ll find me training, or ready to debate my
              favourite hot sauce. 🌶️
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {[
              "Product Design",
              "Design Systems",
              "UX Strategy",
              "Interaction Design",
            ].map((s) => (
              <span
                key={s}
                className="font-display text-lg font-bold text-ink"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-8">
            {["Create", "Rest", "Design", "Dream", "Repeat"].map((word, i) => (
              <span key={word} className="flex items-center gap-3">
                {i > 0 && <span className="text-acid-deep">✦</span>}
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
                  {word}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.9] tracking-tight md:text-7xl">
        Ways I can <span className="text-acid">do more</span>
      </h2>
      <div className="mt-8 border-t border-line" />

      <div className="mt-12 grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-line bg-ink-card p-9 transition-colors hover:border-paper/20 md:p-12">
          <h3 className="font-display text-2xl font-bold tracking-tight text-fog md:text-3xl">
            My design process
          </h3>
          <p className="mt-8 text-lg leading-relaxed text-paper/80 md:text-xl">
            <span className="text-acid">
              I start by understanding and defining the problem,
            </span>{" "}
            then collaborate with the team to set clear, measurable goals aligned
            with project needs and company vision. Through targeted research, I
            craft a design strategy and roadmap to guide successful execution.
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-ink-card p-9 transition-colors hover:border-paper/20 md:p-12">
          <h3 className="font-display text-2xl font-bold tracking-tight text-fog md:text-3xl">
            What I do
          </h3>
          <p className="mt-8 text-lg leading-relaxed text-paper/80 md:text-xl">
            I craft design strategies that{" "}
            <span className="text-acid">
              solve user challenges and drive growth,
            </span>{" "}
            retention, conversions, and revenue.
          </p>
        </div>
      </div>
    </section>
  )
}

const AI_CAPABILITIES = [
  {
    no: "01",
    title: "Designing AI-driven features",
    body: "Shipping product surfaces where AI does real work — smart defaults, assisted flows, and intent-aware experiences that stay in the user's control.",
  },
  {
    no: "02",
    title: "AI-powered design tooling",
    body: "Folding generative and AI tools into my own workflow — from rapid exploration and content drafting to prototyping ideas in hours, not days.",
  },
  {
    no: "03",
    title: "Workflow automation",
    body: "Building automations that remove the busywork from a design team — handoff, documentation, and repetitive production so people can focus on the thinking.",
  },
]

type AiWork = {
  tag: string
  title: string
  body: string
  image: string
  link?: string
}

const AI_WORK: AiWork[] = [
  {
    tag: "Live · Marketing site",
    title: "Reviewtrics",
    body: "An AI tool that turns raw customer reviews into a prioritised action plan — grouping complaints, measuring their impact on ratings, and surfacing what to fix first. Decisions, not charts.",
    image: reviewtricsSite,
    link: "https://reviewtrics.com/",
  },
  {
    tag: "Live · Product portal",
    title: "Reviewtrics App",
    body: "The product itself — the portal where owners upload reviews and get sentiment, themes, and visual reports. Designed and built end to end with AI in the loop.",
    image: reviewtricsApp,
    link: "https://sentiment-glance.lovable.app/",
  },
  {
    tag: "Live · Prototype",
    title: "AI Concept Site",
    body: "An AI-built concept site — designed and shipped end to end with generative tooling in the loop.",
    image:
      "https://image.thum.io/get/width/1000/crop/625/noanimate/https://volume-grainy-87691212.figma.site/",
    link: "https://volume-grainy-87691212.figma.site/",
  },
]

function AI() {
  return (
    <section id="ai" className="relative overflow-hidden border-y border-line bg-ink-soft">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-acid">
          <span className="h-2 w-2 rounded-full bg-acid" />
          Designing with AI
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[0.98] tracking-tight md:text-6xl">
            AI is a material I design with —
            <span className="text-acid"> not a feature I bolt on.</span>
          </h2>
          <p className="max-w-md leading-relaxed text-paper/75">
            I treat AI as a design problem first: where it genuinely helps, where
            it should stay quiet, and how to keep people in control. Then I build
            it into both the product and the way my team works.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line md:grid-cols-3">
          {AI_CAPABILITIES.map((c) => (
            <div
              key={c.no}
              className="group relative bg-ink-card p-8 transition-colors hover:bg-ink md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-acid">{c.no}</span>
                <span className="font-mono text-lg text-fog transition-colors group-hover:text-acid">
                  ✦
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
                {c.title}
              </h3>
              <p className="mt-4 leading-relaxed text-paper/70">{c.body}</p>
            </div>
          ))}
        </div>

        {/* AI work showcase */}
        <div className="mt-20 border-t border-line pt-14">
          <div className="mb-8 flex items-end justify-between">
            <h3 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
              Built with AI
            </h3>
            <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-fog md:block">
              Shipped, end to end
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {AI_WORK.map((w) => {
              const Tag = w.link ? "a" : "div"
              return (
                <Tag
                  key={w.title}
                  {...(w.link
                    ? { href: w.link, target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="group block overflow-hidden rounded-2xl border border-line bg-ink-card transition-colors hover:border-paper/25"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    <img
                      src={w.image}
                      alt={`${w.title} preview`}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <span className="accent-bg absolute left-4 top-4 rounded-full bg-acid px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white">
                      {w.tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <h4 className="font-display text-xl font-bold tracking-tight">
                      {w.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-paper/70">
                      {w.body}
                    </p>
                    {w.link && (
                      <span className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.15em] text-acid">
                        Visit site ↗
                      </span>
                    )}
                  </div>
                </Tag>
              )
            })}
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-fog">
            A living space for AI experiments — drop-in slots ready for full case
            studies as they ship. Happy to walk through the process live.
          </p>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="border-y border-line bg-ink-soft">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-fog">
          Peer words
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.org}
              className="flex flex-col justify-between rounded-2xl border border-line bg-ink-card p-8"
            >
              <blockquote className="font-display text-xl font-semibold leading-snug tracking-tight text-paper">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <div className="font-medium text-paper">{t.name}</div>
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-fog">
                  {t.org}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

const COMMUNITY_PHOTOS = [
  community16,
  community17,
  community18,
  community19,
  community20,
  community21,
  community22,
]

const COMMUNITY_ROLES = [
  {
    title: "Ambassador",
    period: "Apr 2023 — Present",
    body: "As Meetup Manager, I keep events running smoothly with a clear purpose and shared goals — leading teams across Marketing, Design, Content, Development, and Logistics.",
    points: [
      "Form and align teams across five disciplines",
      "Build a timeline of tasks leading up to each meetup",
      "Coordinate with speakers and prep their materials",
      "Evaluate outcomes and document insights for next time",
    ],
  },
  {
    title: "Core Team Member",
    period: "Jun 2019 — Feb 2023",
    body: "Grew with the community from the inside — contributing across design and events as it scaled.",
    points: ["Theme Designer", "Meetup Volunteer", "Core member"],
  },
]

function Community() {
  return (
    <section id="community" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.9] tracking-tight md:text-7xl">
          My contribution
          <br />
          to the <span className="text-acid">community</span>
        </h2>
        <p className="max-w-md leading-relaxed text-paper/75">
          As an active member of the Madrasters creative community, I&apos;m
          committed to fostering a space where creativity thrives. Whether as an
          Ambassador or a core team member, I aim to inspire, educate, and
          support the next wave of design talent.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {COMMUNITY_PHOTOS.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-line bg-ink-soft"
          >
            <img
              src={src}
              alt={`Madrasters community event ${i + 1}`}
              className="aspect-square w-full object-cover grayscale transition-transform duration-500 hover:scale-[1.05]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {COMMUNITY_ROLES.map((r) => (
          <div
            key={r.title}
            className="rounded-2xl border border-line bg-ink-card p-8 md:p-10"
          >
            <h3 className="font-display text-3xl font-bold tracking-tight">
              {r.title}
            </h3>
            <div className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-acid">
              {r.period}
            </div>
            <p className="mt-5 leading-relaxed text-paper/75">{r.body}</p>
            <ul className="mt-6 space-y-2">
              {r.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-paper/85">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-acid" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rajesh-sankar-41583317a/" },
  { label: "Dribbble", href: "https://dribbble.com/Rajesh_sanker" },
  { label: "Behance", href: "https://www.behance.net/rajeshrajesh1" },
  { label: "Medium", href: "https://medium.com/@rajeshsanker10" },
  { label: "Instagram", href: "https://www.instagram.com/rajeshsankar_10" },
]

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=%2B918668055702&text&type=phone_number&app_absent=0"

function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-fog">
          Currently open to senior & lead roles
        </div>
        <h2 className="mt-6 font-display text-[13vw] font-extrabold leading-[0.9] tracking-[-0.03em] md:text-[9vw]">
          Let&apos;s build
          <br />
          something
          <span className="text-acid"> honest.</span>
        </h2>

        <div className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-[1fr_auto] md:items-end">
          <a
            href="mailto:rajeshsanker10@gmail.com"
            className="font-display text-2xl font-bold text-paper underline decoration-acid decoration-2 underline-offset-[6px] transition-colors hover:text-acid md:text-4xl"
          >
            rajeshsanker10@gmail.com
          </a>
          <div className="flex flex-wrap gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.18em] text-fog transition-colors hover:text-paper"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="accent-bg inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 font-display text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Message me on WhatsApp ↗
          </a>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-2 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.15em] text-fog md:flex-row">
          <span>© {new Date().getFullYear()} Rajesh Sankar</span>
          <span>Designed with intent — built to scale</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") return localStorage.getItem("theme") || "dark"
    return "dark"
  })
  const [accent, setAccentState] = useState<AccentPreset>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("accent-id")
      return ACCENT_PRESETS.find((p) => p.id === saved) ?? ACCENT_PRESETS[0]
    }
    return ACCENT_PRESETS[0]
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
    applyAccent(accent, theme)
  }, [theme, accent])

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"))

  const setAccent = (p: AccentPreset) => {
    setAccentState(p)
    localStorage.setItem("accent-id", p.id)
  }

  return (
    <div className="min-h-screen bg-ink text-paper">
      <TopBar />
      <main>
        <Hero />
        <Stats />
        <Reel />
        <Work />
        <AI />
        <About />
        <Approach />
        <Testimonials />
        <Community />
        <Contact />
      </main>
      <ThemeCustomizer
        theme={theme}
        toggleTheme={toggleTheme}
        accent={accent}
        setAccent={setAccent}
      />
    </div>
  )
}
