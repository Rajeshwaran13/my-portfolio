/**
 * Action buttons shown under a reply, keyed by intent id.
 * An action is { label, href? (external/download), to? (router page), section? (home section id) }.
 */
import { profile, whatsappLink } from '@/data/profile';

export const actionsById = {
  about: [{ label: 'Download resume', href: profile.resumePath }, { label: 'See projects', section: 'projects' }],
  featured: [{ label: 'Open Projects', section: 'projects' }],
  projects: [{ label: 'Open Projects', section: 'projects' }, { label: 'Full analysis', to: '/analysis' }],
  experience: [{ label: 'Open Experience', section: 'experience' }],
  education: [{ label: 'Open Education', section: 'education' }],
  certifications: [{ label: 'View certificates', section: 'certifications' }],
  skills: [{ label: 'Open Skills', section: 'skills' }],
  contact: [
    { label: 'WhatsApp', href: whatsappLink() },
    { label: 'Email', href: `mailto:${profile.email}` },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'GitHub', href: profile.github },
  ],
  hire: [{ label: 'WhatsApp', href: whatsappLink() }, { label: 'Download resume', href: profile.resumePath }],
};
