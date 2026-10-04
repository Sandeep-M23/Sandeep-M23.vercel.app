import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/primitives/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <ButtonLink href="/" className="mt-8">
        <ArrowLeft className="size-4" /> Back home
      </ButtonLink>
    </div>
  );
}
