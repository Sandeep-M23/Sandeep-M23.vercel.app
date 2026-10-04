import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/app/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { SocialLinks } from "@/components/site-footer";
import { SectionHeading } from "@/components/primitives/section-heading";
import { profile } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Sandeep M, a full-stack engineer in Bengaluru, by email or through the contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Let's talk"
            description="Got a question, a proposal, or just want to say hello? Send a message and I'll get back to you."
          />
          <Reveal delay={0.1} className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
            >
              <span className="grid size-10 place-items-center rounded-full bg-accent-soft text-accent">
                <Mail className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted">Email</span>
                <span className="block truncate font-medium">{profile.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
              <span className="grid size-10 place-items-center rounded-full bg-accent-soft text-accent">
                <MapPin className="size-4" />
              </span>
              <span>
                <span className="block text-xs text-muted">Location</span>
                <span className="block font-medium">{profile.location}</span>
              </span>
            </div>
            <SocialLinks className="pt-2" />
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
