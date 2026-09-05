import { CodeBlock } from "@/components/ui/code-block";
import { readPublicFile } from "@/lib/server";

export default async function Home() {
  const unixInstallScript = await readPublicFile("install.sh");

  return (
    <div className="flex flex-col items-center pt-6 px-6">
      <header className="text-center my-6 space-y-2">
        <h1 className="text-4xl font-bold">doman</h1>
        <p className="text-muted-foreground">A couple tools I use all the time</p>
      </header>
      <main className="w-full max-w-md [&_section]:space-y-3 space-y-6">
        <section>
          <header className="space-y-1">
            <h2>Quick Install</h2>
            <p className="text-xs text-muted-foreground">
              Requires <code className="bg-accent px-1 py-0.5 rounded-sm inline-flex">go</code> to be installed
            </p>
          </header>
          <CodeBlock lang="shell">{`go install doman.sh/cli@latest`}</CodeBlock>
        </section>
        <section>
          <h2>macOS/Linux</h2>
          <CodeBlock lang="bash">{`curl -fsSL https://doman.sh/install.sh`}</CodeBlock>
        </section>
        <section>
          <h2>Windows</h2>
          <CodeBlock lang="powershell">{`curl -fsSL https://doman.sh/install.ps1`}</CodeBlock>
        </section>
      </main>
    </div>
  );
}
