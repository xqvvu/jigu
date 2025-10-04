export function createInjectTokens(
  provider: string,
): `JIGU_${typeof provider}` {
  return `JIGU_${provider.toUpperCase()}`;
}
