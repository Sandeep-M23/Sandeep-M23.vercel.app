"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2, Send, XCircle } from "lucide-react";
import { buttonClass } from "@/components/primitives/button";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

const fields = [
  { name: "from_name", label: "Your name", type: "text", autoComplete: "name", placeholder: "Jane Doe" },
  { name: "from_email", label: "Email", type: "email", autoComplete: "email", placeholder: "you@example.com" },
  { name: "subject", label: "Subject", type: "text", autoComplete: "off", placeholder: "What's this about?" },
] as const;

const inputClass =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-4 focus:ring-accent/15";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    try {
      await emailjs.send(
        "service_74k06az",
        "template_1u212jk",
        { ...data, to_name: profile.name },
        { publicKey: "LYvGTZ9808EWllPcj" },
      );
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className={field.name === "subject" ? "sm:col-span-2" : undefined}>
            <label htmlFor={field.name} className="mb-2 block text-sm font-medium">
              {field.label}
            </label>
            <input id={field.name} required {...field} className={inputClass} />
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me a little about it…"
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className={buttonClass("primary")}>
          {status === "sending" ? (
            <>
              Sending <Loader2 className="size-4 animate-spin" />
            </>
          ) : (
            <>
              Send message <Send className="size-4" />
            </>
          )}
        </button>
        <AnimatePresence mode="wait">
          {(status === "sent" || status === "error") && (
            <motion.p
              key={status}
              role="status"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className={`flex items-center gap-2 text-sm ${status === "sent" ? "text-emerald-500" : "text-accent"}`}
            >
              {status === "sent" ? (
                <>
                  <CheckCircle2 className="size-4" /> Message sent. I&apos;ll be in touch soon.
                </>
              ) : (
                <>
                  <XCircle className="size-4" /> Couldn&apos;t send. Please email me directly.
                </>
              )}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
