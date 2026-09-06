import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { Separator } from "@/components/ui/separator";
import { DOMAN_REPO_URL } from "@/lib/const";
import { readPublicFile } from "@/lib/server";
import { ArrowRightIcon } from "lucide-react";

export default async function Home() {
  return (
    <div className="flex flex-col items-center pt-6 px-6">
      <header className="text-center my-6 space-y-2">
        <h1 className="text-4xl font-bold">doman</h1>
        <p className="text-muted-foreground">
          A few useful tools for <strong>dom</strong>ain-<strong>man</strong>agement
          <br />
          (but not DNS though)
        </p>
      </header>
      <main className="w-full max-w-md [&_section]:space-y-3 space-y-6">
        <section className="flex flex-col items-center">
          <a href={DOMAN_REPO_URL}>
            <Button size="lg">
              Learn More
              <ArrowRightIcon />
            </Button>
          </a>
        </section>
        <section>
          <header className="space-y-1">
            <h3>Quick Install</h3>
            <p className="text-xs text-muted-foreground">
              Requires <code className="bg-accent px-1 py-0.5 rounded-sm inline-flex">go</code> to be installed
            </p>
          </header>
          <CodeBlock lang="shell" copyOverride="go install doman.sh/cli@latest">
            <span className="inline-flex items-center gap-2 font-mono">
              <span className="text-[rgb(255,166,87)]">{"go"}</span>
              <span className="text-[rgb(201,209,217)]">{"install"}</span>
              <span className="text-[rgb(201,209,217)]">{"doman.sh/cli@latest"}</span>
            </span>
          </CodeBlock>
        </section>

        <Separator className="my-12" />

        <h2>Install</h2>

        <section>
          <h3>macOS/Linux</h3>
          <CodeBlock lang="curl">{`curl -fsSL https://doman.sh/install.sh`}</CodeBlock>
        </section>
        <section>
          <h3>Windows</h3>
          <CodeBlock lang="powershell">{`irm https://doman.sh/install.ps1 | iex`}</CodeBlock>
        </section>
      </main>
    </div>
  );
}
