export function toHoursAndMinutes(minutes: number): string {
  const mn = minutes % 60;
  const hours = Math.floor(minutes / 60);

  return `${hours}h${mn}`;
}
