/** useCommands — the command list for the palette (sections, page, actions, projects). */
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { allWork as projects } from '@/data/projects';
import { whatsappLink, profile } from '@/data/profile';
import { useSectionNav } from '@/hooks/useNav';

export function useCommands(onClose) {
  const navigate = useNavigate();
  const goToSection = useSectionNav();

  return useMemo(() => {
    const close = () => onClose?.();
    const goHash = (id) => () => {
      close();
      goToSection(id);
    };
    const goRoute = (to) => () => {
      close();
      navigate(to);
    };
    const openExt = (href) => () => {
      close();
      window.open(href, '_blank', 'noopener');
    };

    return [
      { label: 'Home', hint: 'Top of page', icon: 'user', run: goHash('top') },
      { label: 'Skills', hint: 'Section', icon: 'code', run: goHash('skills') },
      { label: 'Experience', hint: 'Section', icon: 'grid', run: goHash('experience') },
      { label: 'Projects', hint: 'Section', icon: 'layout', run: goHash('projects') },
      { label: 'Analysis', hint: 'Page', icon: 'chart', run: goRoute('/analysis') },
      { label: 'Education & Awards', hint: 'Section', icon: 'cap', run: goHash('education') },
      { label: 'Contact', hint: 'Section', icon: 'mail', run: goHash('contact') },
      { label: 'Message on WhatsApp', hint: 'Open chat', icon: 'chat', run: openExt(whatsappLink()) },
      { label: 'Download Résumé', hint: 'PDF', icon: 'download', run: openExt(profile.resumePath) },
      ...projects.map((p) => ({
        label: p.title,
        hint: p.category,
        icon: 'arrow',
        run: goRoute(`/projects/${p.id}`),
      })),
    ];
  }, [onClose, goToSection, navigate]);
}
