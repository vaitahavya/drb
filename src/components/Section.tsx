import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Optional background: default | navy | grey */
  variant?: "default" | "navy" | "grey";
  /** Optional inner max-width wrapper */
  narrow?: boolean;
}

export function Section({
  children,
  className = "",
  variant = "default",
  narrow = false,
}: SectionProps) {
  const bg =
    variant === "navy"
      ? "bg-[var(--navy)] text-white"
      : variant === "grey"
        ? "bg-[var(--grey-50)]"
        : "";
  return (
    <section className={`py-16 lg:py-24 ${bg} ${className}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${narrow ? "max-w-4xl" : "max-w-7xl"}`}>
        {children}
      </div>
    </section>
  );
}
