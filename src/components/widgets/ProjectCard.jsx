/** ProjectCard — flat project card with hover lift and source/live actions. */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '@/components/ui/AppIcon';
import LivePreviewPanel from '@/components/widgets/LivePreviewPanel';
import { CATEGORY_COLORS } from '@/components/charts/categoryColors';
import { reveal } from '@/hooks/reveal';
import s from './ProjectCard.module.css';

export default function ProjectCard({ project, revealDelay }) {
  const [showPreview, setShowPreview] = useState(false);
  const extra = project.stack.length - 5;

  return (
    <article
      ref={reveal(revealDelay)}
      className={`${s.card} surface ${project.featured ? s.featured : ''}`}
    >
      <header className={s.top}>
        <span className={s.cat} style={{ color: CATEGORY_COLORS[project.category] }}>
          {project.category}
        </span>
        {project.featured ? (
          <span className={`${s.badge} ${s.star}`}>★ Featured</span>
        ) : project.freelance ? (
          <span className={`${s.badge} ${s.free}`}>Freelance</span>
        ) : null}
      </header>
      <h3 className={s.title}>{project.title}</h3>
      <p className={s.tagline}>{project.tagline}</p>
      <p className={s.summary}>{project.summary}</p>
      <div className={s.stack}>
        {project.stack.slice(0, 5).map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
        {extra > 0 && <span className={`chip ${s.more}`}>+{extra}</span>}
      </div>

      <footer className={s.actions}>
        {/* Stretched link: makes the whole card open the case study. */}
        <Link to={`/projects/${project.id}`} className={`${s.view} ${s.stretched}`}>
          View case study <AppIcon name="arrow" size={16} />
        </Link>

        {(project.repo || project.demo) && (
          <span className={s.extLinks}>
            {project.demo && (
              <button
                type="button"
                className={`${s.ext} ${s.live}`}
                title="Opens the live, running app right here in an embedded browser view"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPreview(true);
                }}
              >
                <AppIcon name="play" size={14} /> Run in Browser
              </button>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener"
                className={s.ext}
                aria-label="View source code on GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                <AppIcon name="github" size={16} /> View Source Code
              </a>
            )}
          </span>
        )}
      </footer>

      {project.demo && (
        <LivePreviewPanel
          open={showPreview}
          onClose={() => setShowPreview(false)}
          url={project.demo}
          title={project.title}
        />
      )}
    </article>
  );
}
