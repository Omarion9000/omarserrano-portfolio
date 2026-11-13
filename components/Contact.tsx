import type { Dictionary } from "@/lib/i18n";
import { LINKS } from "@/lib/links";
import Section from "./Section";
import { IconChart, IconGitHub, IconLinkedIn, IconMail } from "./Icons";

export default function Contact({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  const items = [
    { href: `mailto:${LINKS.email}`, label: c.email, detail: LINKS.email, Icon: IconMail, external: false },
    { href: LINKS.linkedin, label: c.linkedin, detail: "in/omar-serrano-toronto", Icon: IconLinkedIn, external: true },
    { href: LINKS.github, label: c.github, detail: "Omarion9000", Icon: IconGitHub, external: true },
    { href: LINKS.tableauProfile, label: c.tableau, detail: "omar.serrano", Icon: IconChart, external: true },
  ];

  return (
    <Section id="contact" title={c.heading} sub={c.body}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map(({ href, label, detail, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-full items-center gap-4 rounded-xl border border-line bg-card p-5 transition-colors hover:border-ink"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper text-ink">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-medium">{label}</span>
                <span className="block truncate font-mono text-xs text-muted">{detail}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
