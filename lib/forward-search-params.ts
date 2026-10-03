export function withForwardedSearchParams(
  destinationUrl: string,
  searchParams: Record<string, string | string[] | undefined>
): string {
  const destination = new URL(destinationUrl);
  const existingKeys = new Set(destination.searchParams.keys());

  for (const [key, value] of Object.entries(searchParams)) {
    if (existingKeys.has(key) || value === undefined) {
      continue;
    }

    const values = Array.isArray(value) ? value : [value];
    for (const item of values) {
      destination.searchParams.append(key, item);
    }
  }

  return destination.toString();
}
