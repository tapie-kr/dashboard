export function formatParticipants(participants: string[]): string {
  if (participants.length === 0) return '';

  if (participants.length === 1) return participants[0];

  return `${participants[0]} 외 ${participants.length - 1}명`;
}
