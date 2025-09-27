export function createInjectTokens(provider: string): symbol {
  return Symbol(`JIGU_${provider}`);
}
