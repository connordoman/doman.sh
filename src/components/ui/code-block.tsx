"use client";

import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { Button } from "./button";
import { toast } from "sonner";
import { Item, ItemActions, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "./item";
import Syntax from "./syntax";

interface LineNumbersProps {
  code?: string;
  countOverride?: number;
}

export function LineNumbers({ code, countOverride }: LineNumbersProps) {
  if (!code && !countOverride) {
    return null;
  }

  const lineCount = countOverride ?? code?.split("\n").length ?? 1;
  let lineNumbers = "";
  for (let i = 0; i < lineCount; i++) {
    lineNumbers += `${i + 1}\n`;
  }

  return <pre className="text-sm text-muted-foreground">{lineNumbers.trim()}</pre>;
}

interface CodeBlockProps {
  fileName?: string;
  fileFolder?: string;
  lang?: string;
  children?: string | React.ReactNode;
  showLineNumbers?: boolean;
  lineCountOverride?: number;
  copyOverride?: string;
}

export function CodeBlock({
  lang,
  fileName,
  fileFolder,
  children,
  showLineNumbers = false,
  lineCountOverride,
  copyOverride,
}: CodeBlockProps) {
  const isString = typeof children === "string";

  const handleCopy = () => {
    try {
      const copyable = copyOverride || (isString ? children : undefined);
      if (copyable && "navigator" in window) {
        window.navigator.clipboard.writeText(copyable);
        toast.success("Copied to clipboard", { icon: <CopyCheckIcon className="size-4" /> });
      } else {
        toast.warning("Nothing to copy (?)");
      }
    } catch {
      toast.error("Failed to copy code");
    }
  };

  return (
    <Item variant="muted">
      <ItemHeader>
        <ItemDescription>
          <span className="">{lang}</span>
        </ItemDescription>
        <div className="flex flex-col items-center">
          {fileName && <ItemTitle className="leading-none">{fileName}</ItemTitle>}
          {fileFolder && <span className="text-xs text-muted-foreground">{fileFolder}</span>}
        </div>

        <ItemActions>
          <Button variant="ghost" size="icon" disabled={!children} onClick={handleCopy}>
            <CopyIcon />
          </Button>
        </ItemActions>
      </ItemHeader>
      <ItemContent className="flex flex-row gap-6 max-w-full">
        {showLineNumbers && <LineNumbers code={isString ? children : undefined} countOverride={lineCountOverride} />}
        {isString ? (
          <div className="overflow-scroll">
            <Syntax.Highlighter
              language={lang}
              style={Syntax.styles.GitHubDarkTransparent}
              customStyle={{ background: "transparent", padding: 0, margin: 0 }}
              codeTagProps={{ style: { background: "transparent" } }}>
              {children}
            </Syntax.Highlighter>
          </div>
        ) : (
          children
        )}
      </ItemContent>
    </Item>
  );
}
