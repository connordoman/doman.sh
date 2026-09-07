import { DOMAN_IMPORT_URL, DOMAN_REPO_URL } from "@/lib/const";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const isGoGet = request.nextUrl.searchParams.get("go-get") === "1";

  if (isGoGet) {
    const html = `<!DOCTYPE html>
<html>
<head>
<meta name="go-import" content="${DOMAN_IMPORT_URL} git ${DOMAN_REPO_URL}">
<meta name="go-source" content="${DOMAN_IMPORT_URL} ${DOMAN_REPO_URL} ${DOMAN_REPO_URL}/tree/main{/dir} ${DOMAN_REPO_URL}/blob/main{/dir}/{file}#L{line}">
</head>
<body>go-import metadata</body>
</html>`;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  return NextResponse.redirect(DOMAN_REPO_URL);
}
