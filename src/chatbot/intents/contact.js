/** People intents — greeting, contact, hire, about, thanks. */
import { profile, whatsappLink } from '@/data/profile';
import { getGreeting, yearsLabel } from './base';

export const contactIntents = [
  {
    id: 'greeting',
    keywords: ['hi ', 'hello', 'hey', 'yo ', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    answer: () => getGreeting(),
  },
  {
    id: 'contact',
    keywords: [
      'contact', 'reach', 'email', 'phone', 'connect', 'linkedin', 'message', 'whatsapp', 'github',
      'source', 'email me', 'get in touch', 'talk', 'call', 'number', 'mobile',
    ],
    answer: () =>
      `You can reach ${profile.firstName} here:\n\n• 📧 Email: ${profile.email}\n• 📱 WhatsApp: [chat now](${whatsappLink()})\n• 💼 LinkedIn: ${profile.linkedin}\n• 🐙 GitHub: ${profile.github}\n• ☎️ Phone: ${profile.phoneDisplay}`,
    followUps: ['Hire me', 'What are your skills?'],
  },
  {
    id: 'hire',
    keywords: [
      'hire', 'available', 'availability', 'freelance', 'opportunity', 'recruit', 'open to', 'looking for',
      'job offer', 'position', 'engage', 'work with you',
    ],
    answer: () =>
      `${profile.firstName} is a **${profile.title}** with ${yearsLabel()} of experience building React.js front ends, Java / Spring Boot services and real-time data pipelines.\n\nFor opportunities or availability, the fastest way to start a conversation is [WhatsApp](${whatsappLink()}) or email ${profile.email}.`,
    followUps: ['How can I contact you?', 'Give me a report'],
  },
  {
    id: 'about',
    keywords: [
      'about yourself', 'who are you', 'introduce', 'tell me about you ', 'tell me about rajeshwaran',
      'who is rajeshwaran', 'about rajesh', 'bio', 'resume', ' cv ',
    ],
    answer: () => `**${profile.name}** — ${profile.title}, based in ${profile.location}.\n\n${profile.about}`,
    followUps: ['What are your skills?', 'Tell me about your projects', 'Hire me'],
  },
  {
    id: 'thanks',
    keywords: ['thank', 'thanks', 'great', 'awesome', 'cool', 'nice'],
    answer: () =>
      `You're welcome! 🙌 Feel free to reach out to ${profile.firstName} on [WhatsApp](${whatsappLink()}) anytime.`,
  },
];
