/** ProjectHeader — category, title, tagline, stack chips and source/live actions. */
import { useState } from 'react';
import AppIcon from '@/components/ui/AppIcon';
import LivePreviewPanel from '@/components/widgets/LivePreviewPanel';
import { CATEGORY_COLORS } from '@/components/charts/categoryColors';
import s from './ProjectDetail.module.css';

export default function ProjectHeader({ project }) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <p className="eyebrow" style={{ color: CATEGORY_COLORS[project.category] }}>
        {project.category}
      </p>
      <h1 className={s.title}>{project.title}</h1>
      <p className={s.tagline}>{project.tagline}</p>

      <div className={s.stack}>
        {project.stack.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      {(project.repo || project.demo) && (
        <div className={s.links}>
          {project.demo && (
            <button
              type="button"
              className="btn btn-primary"
              title="Opens the live, running app right here in an embedded browser view"
              onClick={() => setShowPreview(true)}
            >
              <AppIcon name="play" size={16} /> Run in Browser
            </button>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener" className="btn">
              <AppIcon name="github" size={17} /> View Source Code
            </a>
          )}
        </div>
      )}
      {project.demo && (
        <p className={s.linksHint}>
          "Run in Browser" opens the live app right here, in an embedded view — no need to leave this
          page.
        </p>
      )}

      {project.demo && (
        <LivePreviewPanel
          open={showPreview}
          onClose={() => setShowPreview(false)}
          url={project.demo}
          title={project.title}
        />
      )}
    </>
  );
}
