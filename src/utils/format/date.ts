export function formatDate(date: Date | null) {
  if (!date) return '';
  return date.toISOString().split('T')[0].split('-').reverse().join('/');
}
