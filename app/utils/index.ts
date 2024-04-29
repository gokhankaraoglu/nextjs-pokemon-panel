export function capitalize(str: string): string {
  const word = str.toLowerCase();
  return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
}
