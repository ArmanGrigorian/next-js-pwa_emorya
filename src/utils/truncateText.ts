export default function truncateText(
  text: string,
  maxLength: number,
  suffix: string = "...",
): string {
  if (text.length <= maxLength) return text;
  if (maxLength <= suffix.length) return suffix.substring(0, maxLength);

  const effectiveLength = maxLength - suffix.length;
  const words = text.split(" ");
  let truncated = "";

  for (const word of words) {
    if ((truncated + word).length + (truncated ? 1 : 0) > effectiveLength)
      break;
    truncated += (truncated ? " " : "") + word;
  }

  if (truncated === "" && words[0]) {
    truncated = words[0].substring(0, effectiveLength);
  }

  return truncated + suffix;
}
