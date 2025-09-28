export function createInjectTokens(provider: string): string {
  return `JIGU_${provider.toUpperCase()}`;
}
