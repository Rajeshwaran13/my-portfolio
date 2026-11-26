/** Shared nav item lists. `id` items scroll to a home-page section; `to` items are page routes. */
export const menuItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Credentials', id: 'education' },
  { label: 'Analysis', to: '/analysis' },
  { label: 'Contact', id: 'contact' },
];

export const dockItems = [
  { id: 'top', label: 'Home', icon: 'user' },
  { id: 'skills', label: 'Skills', icon: 'code' },
  { id: 'experience', label: 'Experience', icon: 'grid' },
  { id: 'projects', label: 'Projects', icon: 'layout' },
  { label: 'Analysis', icon: 'chart', to: '/analysis' },
  { id: 'education', label: 'Education', icon: 'cap' },
  { id: 'certifications', label: 'Certifications', icon: 'award' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
];
