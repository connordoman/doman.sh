import "server-only";
import { readFile } from "fs/promises";
import { join } from "path";

export async function readPublicFile(path: string): Promise<string | null> {
  try {
    const fullPath = join("public", path);

    const file = await readFile(fullPath);

    return file.toString();
  } catch (err) {
    console.error(err);
    return null;
  }
}
