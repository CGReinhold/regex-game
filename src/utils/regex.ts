export const match = (regex: string, text: string, isNotPerfectMatch: boolean = false): boolean => {
  if (!isNotPerfectMatch) {
    regex = `^${regex}$`;
  }
  return RegExp(regex).test(text);
}