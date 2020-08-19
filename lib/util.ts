export function getStatusEmoji(status: string) {
  switch (status.toLowerCase()) {
    case 'red':
      return '❤️️️'
    case 'green':
      return '💚'
    case 'yellow':
      return '💛'
    default:
      return '❗'
  }
}
