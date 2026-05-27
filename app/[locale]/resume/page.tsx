// TODO(i18n): resume content is hardcoded EN; ES/FR routes serve EN copy. Translate or redirect /es/resume and /fr/resume to /en/resume.
import { getDictionary } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResumePage({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <Navbar locale={params.locale} dict={dict} />

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <header className="mb-8 pb-6 border-b border-editor-border">
          <h1 className="font-mono text-3xl md:text-4xl font-medium text-text-primary">
            Omar Serrano
          </h1>
          <p className="mt-2 text-text-secondary">AI &amp; Automation Developer · Full-Stack Engineer</p>
          <p className="mt-1 font-mono text-xs text-text-muted">
            Toronto, ON · EN · ES · FR ·
            <a href="mailto:omarion.montoya@gmail.com" className="ml-1 hover:text-accent">omarion.montoya@gmail.com</a>
          </p>

          <a
            href="/cv/omar-serrano-resume.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-accent text-background rounded font-mono text-sm hover:bg-text-primary transition-colors"
          >
            ↓ Download PDF
          </a>
        </header>

        <article className="space-y-10 text-text-primary">
          <section>
            <h2 className="font-mono text-sm text-text-muted mb-3">
              <span className="text-syntax-comment">{"// "}</span>Summary
            </h2>
            <p className="leading-relaxed text-text-secondary">
              Bilingual (EN/ES) full-stack developer specialized in AI integration and workflow automation.
              Built and shipped production SaaS — PRAVÉ (Canadian Express Entry CRS simulation platform
              with Stripe subscription billing) — and currently building Francaisia (TEF Canada French
              exam prep platform, launching 2026). Experienced with AI virtual assistants using Anthropic
              Claude API. Microsoft Azure Fundamentals certified. I help businesses save 10+ hours per
              week with chatbots, voice agents, and custom web applications. Toronto-based, available
              for remote work worldwide.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-sm text-text-muted mb-3">
              <span className="text-syntax-comment">{"// "}</span>Skills
            </h2>
            <dl className="space-y-2 text-sm">
              <div className="flex flex-col md:flex-row md:gap-4">
                <dt className="font-semibold text-text-primary md:w-40">Frontend</dt>
                <dd className="text-text-secondary">Next.js 14, React 18, TypeScript, Tailwind CSS, framer-motion</dd>
              </div>
              <div className="flex flex-col md:flex-row md:gap-4">
                <dt className="font-semibold text-text-primary md:w-40">Backend</dt>
                <dd className="text-text-secondary">Node.js, Express, REST APIs, PostgreSQL, Supabase</dd>
              </div>
              <div className="flex flex-col md:flex-row md:gap-4">
                <dt className="font-semibold text-text-primary md:w-40">AI &amp; Automation</dt>
                <dd className="text-text-secondary">Anthropic Claude API, OpenAI, n8n, Make, Vapi, Twilio</dd>
              </div>
              <div className="flex flex-col md:flex-row md:gap-4">
                <dt className="font-semibold text-text-primary md:w-40">Cloud &amp; DevOps</dt>
                <dd className="text-text-secondary">Microsoft Azure (AZ-900), Vercel, Render, Git, Linux</dd>
              </div>
              <div className="flex flex-col md:flex-row md:gap-4">
                <dt className="font-semibold text-text-primary md:w-40">Languages</dt>
                <dd className="text-text-secondary">English (Fluent) · Spanish (Native) · French (Basic)</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="font-mono text-sm text-text-muted mb-3">
              <span className="text-syntax-comment">{"// "}</span>Featured Projects
            </h2>
            <div className="space-y-5">
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold">PRAVÉ — Express Entry CRS Simulation</h3>
                  <a href="https://www.pravepath.ca" className="font-mono text-xs text-accent hover:underline" target="_blank" rel="noopener noreferrer">pravepath.ca</a>
                </div>
                <p className="text-sm text-text-secondary mt-1">
                  Solo-built production SaaS with Stripe billing, Supabase auth + RLS, bilingual EN/ES interface,
                  and Claude API-powered scenario analysis.
                </p>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold">Sofia — Bilingual AI Receptionist</h3>
                  <span className="font-mono text-xs text-text-muted">demo</span>
                </div>
                <p className="text-sm text-text-secondary mt-1">
                  AI virtual receptionist with Anthropic Claude API, conversation context, rate limiting,
                  and bilingual EN/ES auto-detection.
                </p>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold">Jesse Merineau — Music Website</h3>
                  <a href="https://jessemerineau.net.omarserrano.ca" className="font-mono text-xs text-accent hover:underline" target="_blank" rel="noopener noreferrer">live</a>
                </div>
                <p className="text-sm text-text-secondary mt-1">
                  Client website with Spotify integration, delivered via Meraki Creative Lab.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-mono text-sm text-text-muted mb-3">
              <span className="text-syntax-comment">{"// "}</span>Experience
            </h2>
            <div className="space-y-5">
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold">Founder · PRAVÉ &amp; Francaisia (Self-employed)</h3>
                  <span className="font-mono text-xs text-text-muted">May 2025 – Present</span>
                </div>
                <p className="text-xs italic text-text-muted">Toronto, ON, Canada</p>
                <ul className="mt-2 ml-5 list-disc text-sm text-text-secondary space-y-1">
                  <li>Founded and built two production-grade SaaS platforms end-to-end: PRAVÉ (Canadian immigration CRS optimization, live with Stripe billing) and Francaisia (TEF Canada French exam prep, pre-launch)</li>
                  <li>Architected full product stack: Next.js 16 App Router, Supabase (auth + Postgres + RLS), Stripe live integration, Anthropic Claude API for AI features, deployed on Vercel</li>
                  <li>Designed and shipped trilingual UX (EN/ES/FR) with i18n middleware, custom CRS calculation engine, and AI-powered scenario analysis</li>
                  <li>Owned full business operations: product strategy, legal/compliance (PIPEDA, CICC), payment infrastructure, content production, and pre-launch marketing</li>
                </ul>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold">Web Developer · Meraki Creative Lab</h3>
                  <span className="font-mono text-xs text-text-muted">Mar 2023 – Apr 2025</span>
                </div>
                <p className="text-xs italic text-text-muted">Remote · Mexico City, Mexico</p>
                <ul className="mt-2 ml-5 list-disc text-sm text-text-secondary space-y-1">
                  <li>Led development on client web projects using Next.js, React, TypeScript, and Node.js, delivering multiple production websites end-to-end</li>
                  <li>Designed and implemented REST APIs and database schemas with Node.js, Express, and PostgreSQL</li>
                  <li>Collaborated in Agile environment with Git workflow and continuous deployment via Vercel</li>
                  <li>Coordinated scope, timelines, and revisions directly with clients in both English and Spanish</li>
                </ul>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold">Customer Service Associate · The Rec Room</h3>
                  <span className="font-mono text-xs text-text-muted">Aug 2023 – May 2026</span>
                </div>
                <p className="text-xs italic text-text-muted">Toronto, ON, Canada · part-time</p>
                <ul className="mt-2 ml-5 list-disc text-sm text-text-secondary space-y-1">
                  <li>Provided bilingual EN/ES customer service in a high-volume entertainment venue</li>
                  <li>Maintained alongside full-time studies and developer roles; demonstrated reliability and time management</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-mono text-sm text-text-muted mb-3">
              <span className="text-syntax-comment">{"// "}</span>Education &amp; Certifications
            </h2>
            <ul className="text-sm text-text-secondary space-y-2">
              <li><strong className="text-text-primary">Diploma in Computer Programming</strong> · Georgian College · Sept 2023 – Apr 2025 · Toronto, ON, Canada</li>
              <li><strong className="text-text-primary">Bachelor in International Trade</strong> · ESCI University · 2018 – 2022 · Mexico</li>
              <li><strong className="text-text-primary">AZ-900 Azure Fundamentals</strong> · Microsoft</li>
              <li>Frontend Developer Diploma · freeCodeCamp certifications (JS Algorithms and Data Structures, Responsive Web Design)</li>
            </ul>
          </section>
        </article>
      </main>

      <Footer dict={dict} />
    </>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }, { locale: "fr" }];
}
