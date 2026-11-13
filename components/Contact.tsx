import type { Dictionary } from "@/lib/i18n";
import { LINKS } from "@/lib/links";
import Reveal from "./Reveal";
import { IconArrow, IconChart, IconGitHub, IconLinkedIn, IconMail } from "./Icons";

export default function Contact({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  const items = [
    { href: `mailto:${LINKS.email}`, label: c.email, detail: LINKS.email, Icon: IconMail, external: false },
    { href: LINKS.linkedin, label: c.linkedin, detail: "in/omar-serrano-toronto", Icon: IconLinkedIn, external: true },
    { href: LINKS.github, label: c.github, detail: "Omarion9000", Icon: IconGitHub, external: true },
    { href: LINKS.tableauProfile, label: c.tableau, detail: "omar.serrano", Icon: IconChart, external: true },
  ];

  return (
    <section id="contact" className="bg-navy-900 py-20 text-white md:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal>
          <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">{c.heading}</h2>
          <div className="mt-5 h-px w-12 bg-gold-light" />
          <p className="mt-5 max-w-2xl text-lg text-white/70">{c.body}</p>
        </Reveal>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {items.map(({ href, label, detail, Icon, external }) => (
            <li key={label} className="bg-navy-900">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-5 p-7 transition-colors hover:bg-white/[0.04]"
              >
                <Icon className="h-5 w-5 shrink-0 text-gold-light" />
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">{label}</span>
                  <span className="block truncate text-sm text-white/55">{detail}</span>
                </span>
                <IconArrow className="h-4 w-4 text-white/30 transition-colors group-hover:text-gold-light" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
