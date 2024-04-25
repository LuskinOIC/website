export function formatProviderType(providerType: string | undefined): string {
  return providerType
    ? providerType.toLowerCase().replace(/\//g, "-")
    : "physician";
}

export function getProviderFormattedPath(
  providerType: string | undefined,
  slug: string,
): string {
  const formattedProviderType = providerType
    ? providerType.toLowerCase().replace(/\//g, "-")
    : "physician";
  return `/providers/${formattedProviderType}/${slug}`;
}
