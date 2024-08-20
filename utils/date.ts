export function formatDate(date: string | Date | number | undefined) {
  if (!date)
    return ''
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatTime(date: string | Date | number | undefined) {
  if (!date)
    return ''
  return new Date(date).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
}
