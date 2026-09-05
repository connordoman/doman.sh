"use client";

import { cn } from "cn";
import { useEffect } from "react";

interface RedirectorProps {
  href: string;
  delay?: number;
  className?: string;
}

export function Redirector({ href, delay = 1000, className }: RedirectorProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = href;
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <a href={href}>
      <code
        className={cn(
          "text-sm rounded-full px-2 py-0.5 border border-primary/10 text-primary bg-primary/10 hover:underline",
          className,
        )}>
        {href.replace("https://", "")}
      </code>
    </a>
  );
}
