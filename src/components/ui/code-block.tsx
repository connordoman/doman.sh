"use client";

import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { Button } from "./button";
import { toast } from "sonner";

interface CodeBlockProps {
  lang?: string;
  children?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ lang, children, showLineNumbers = false }: CodeBlockProps) {
  const lineCount = children?.split("\n").length ?? 1;
  let lineNumbers = "";
  for (let i = 0; i < lineCount; i++) {
    lineNumbers += `${i + 1}\n`;
  }

  const handleCopy = () => {
    try {
      if (children && "navigator" in window) {
        window.navigator.clipboard.writeText(children);
        toast.success("Copied to clipboard", { icon: <CopyCheckIcon className="size-4" /> });
      }
    } catch {
      toast.error("Failed to copy code");
    }
  };

  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <header className="bg-muted/50 pl-3 pr-1 pt-1 pb-1.5 flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">{lang}</span>
        <Button variant="ghost" size="icon" disabled={!children} onClick={handleCopy}>
          <CopyIcon />
        </Button>
      </header>
      <div className="px-3 py-3 flex gap-6">
        {showLineNumbers && <pre className="text-sm text-muted-foreground">{lineNumbers.trim()}</pre>}
        <pre className="text-sm">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}
