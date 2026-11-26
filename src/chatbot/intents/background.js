/** Background intents — education, certifications, core strengths, location, languages. */
import { profile } from '@/data/profile';
import { education, certifications, languages, achievements } from '@/data/experience';

export const backgroundIntents = [
  {
    id: 'education',
    keywords: [
      'education', 'degree', 'college', 'study', 'studied', 'university', 'cgpa', 'msc', 'm sc',
      'master', 'qualification', 'american college', 'madurai',
    ],
    answer: () => {
      const list = education
        .map((e) => `• **${e.degree}** — ${e.institution} (${e.period}, ${e.score})`)
        .join('\n');
      return `Education:\n\n${list}`;
    },
    followUps: ['What certifications do you have?', 'What are your skills?'],
  },
  {
    id: 'certifications',
    keywords: ['certif', 'course', 'credential', 'training', 'j spiders', 'jspiders'],
    answer: () => `Certifications:\n\n${certifications.map((c) => `• ${c}`).join('\n')}`,
    followUps: ['What are your skills?', 'Tell me about your education'],
  },
  {
    id: 'strengths',
    keywords: ['core strength', 'dsa', 'algorithm', 'data structure', 'version control', 'quality gate', 'sonarqube'],
    answer: () =>
      `Core strengths:\n\n${achievements.map((a) => `• **${a.title}** — ${a.detail}`).join('\n')}`,
    followUps: ['What are your skills?', 'Tell me about your projects'],
  },
  {
    id: 'location',
    keywords: [
      'where are you', 'based', 'location', 'live', 'city', 'bengaluru', 'bangalore', 'india',
      'timezone', 'time zone',
    ],
    answer: () => `${profile.firstName} is based in ${profile.location}.`,
    followUps: ['Are you available for hire?', 'How can I contact you?'],
  },
  {
    id: 'languages',
    keywords: ['language', 'speak', 'tamil', 'english', 'multilingual'],
    answer: () => `${profile.firstName} speaks ${languages.join(' and ')}.`,
    followUps: ['Where are you based?', 'What are your skills?'],
  },
];
