/**
 * Renders a JSON-LD <script>. Server-safe; drop it anywhere in a page's JSX.
 * Accepts one schema object or an array of them.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
