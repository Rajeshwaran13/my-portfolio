/**
 * Profile — core identity, contact, and hero content.
 * Edit this file to update name, title, links, photo and the WhatsApp CTA.
 */

export const profile = {
  name: 'Rajeshwaran N',
  firstName: 'Rajeshwaran',
  initials: 'RN',
  title: 'Full Stack Software Engineer',
  subtitle:
    'I build end-to-end features with React.js, Java and Spring Boot for a multi-tenant Smart City IoT platform deployed across multiple cities.',
  tagline:
    'I developed a low-code Apache NiFi data-pipeline platform and a real-time, ML-driven Rule Engine — working across RESTful APIs, microservices, Apache Kafka event streaming, Jest / React Testing Library unit testing and Jenkins CI/CD quality gates (SonarQube, OWASP) in Agile/Scrum teams.',
  experienceYears: '1',
  location: 'Bengaluru, India',
  email: 'rajeshwaran1808@gmail.com',
  phoneDisplay: '+91 63744 15223',
  /** International format, no symbols — used for wa.me and tel: links. */
  whatsapp: '916374415223',
  whatsappMessage:
    "Hi Rajeshwaran, I came across your portfolio and I'd love to connect with you regarding an opportunity.",
  linkedin: 'https://www.linkedin.com/in/rajesh0613',
  github: 'https://github.com/Rajeshwaran13',
  /** Square avatar photo, e.g. '/profile-face.jpg'. null = "RN" monogram. */
  photo: '/profile-face.jpg',
  /** Hero portrait, e.g. '/profile-portrait.png'. null = empty photo placeholder. */
  portrait: '/profile-photo.jpg',
  resumePath: '/Rajeshwaran-N-Resume.pdf',

  about:
    'Full Stack Software Engineer with experience in React.js, Java and Spring Boot for a multi-tenant Smart City IoT platform. Developed a low-code Apache NiFi data-pipeline platform and a real-time, ML-driven Rule Engine. Proficient in RESTful APIs, microservices, Apache Kafka event streaming, Jest/React Testing Library unit testing and Jenkins CI/CD quality gates (SonarQube, OWASP) in Agile/Scrum teams.',
};

export const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'Phone', href: `tel:+${profile.whatsapp}`, icon: 'phone' },
];

/** Builds the WhatsApp click-to-chat deep link with a prefilled message. */
export function whatsappLink(message = profile.whatsappMessage) {
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`;
}
