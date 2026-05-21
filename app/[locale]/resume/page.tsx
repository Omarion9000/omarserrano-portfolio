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
              Built and shipped production SaaS (PRAVÉ) and AI virtual assistants using Anthropic Claude API.
              Microsoft Azure Fundamentals certified. I help businesses save 10+ hours per week with chatbots,
              voice agents, and custom web applications.
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
                  <h3 className="font-semibold">Web Developer · Meraki Creative Lab</h3>
                  <span className="font-mono text-xs text-text-muted">Mar 2023 – Present</span>
                </div>
                <p className="text-xs italic text-text-muted">Remote · Toronto, ON</p>
                <ul className="mt-2 ml-5 list-disc text-sm text-text-secondary space-y-1">
                  <li>Lead developer on client projects with Next.js, React, TypeScript, Node.js</li>
                  <li>Design REST APIs and database schemas with PostgreSQL</li>
                  <li>Coordinate scope with clients in English and Spanish</li>
                </ul>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold">Customer Service Associate · The Rec Room</h3>
                  <span className="font-mono text-xs text-text-muted">Aug 2023 – Present</span>
                </div>
                <p className="text-xs italic text-text-muted">Toronto, ON · part-time</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-mono text-sm text-text-muted mb-3">
              <span className="text-syntax-comment">{"// "}</span>Education &amp; Certifications
            </h2>
            <ul className="text-sm text-text-secondary space-y-2">
              <li><strong className="text-text-primary">Diploma in Computer Programming</strong> · Georgian College · 2023–2025</li>
              <li><strong className="text-text-primary">Bachelor in International Trade</strong> · ESCI Mexico · 2018–2022</li>
              <li><strong className="text-text-primary">AZ-900 Azure Fundamentals</strong> · Microsoft</li>
              <li>Frontend Developer Diploma · freeCodeCamp certifications (JS Algorithms, Responsive Web Design)</li>
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
