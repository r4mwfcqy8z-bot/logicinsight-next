/** Resolve a public-asset URL with the active basePath.
 * Next/Image in static-export mode doesn't always prefix basePath for /public files;
 * use this for any <img src=...> targeting public/. */
export function asset(path: string): string {
  const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const norm = path.startsWith("/") ? path : "/" + path;
  return bp + norm;
}
