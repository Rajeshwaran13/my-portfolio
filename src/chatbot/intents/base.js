/**
 * Shared chatbot copy — starter suggestions, time-aware greeting and fallback.
 * Every fact here comes from the data modules (see src/data).
 */
import { profile, whatsappLink } from '@/data/profile';

export const suggestions = [
  'What are your skills?',
  'Give me a report',
  'Tell me about the Rule Engine',
  'Which projects used Kafka?',
  'How can I contact you?',
  'Hire me',
];

export function getGreeting(name) {
  const h = new Date().getHours();
  const part = h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
  return `👋 ${part}${name ? `, ${name}` : ''}! I'm ${profile.firstName}'s portfolio assistant. Ask me about his **data-pipeline & real-time projects**, **skills**, **experience**, **education**, or how to **get in touch** — or just tap a suggestion below.`;
}

export const fallback = `Hmm, I didn't quite catch that 🤔 I'm a lightweight assistant — try asking about **skills**, **projects**, **experience**, **education**, **certifications**, or **contact**. You can also message ${profile.firstName} directly on [WhatsApp](${whatsappLink()}).`;

/** "1 year" / "3 years" — experienceYears is a display string like '1'. */
export const yearsLabel = () =>
  `${profile.experienceYears} year${profile.experienceYears === '1' ? '' : 's'}`;
