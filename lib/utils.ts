export function formatDate(dateString?: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

export function getInitials(name?: string): string {
  if (!name) return '?'
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()
}