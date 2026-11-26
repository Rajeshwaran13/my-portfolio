/** ProjectDetailView — full case-study page for a single project (/projects/:id). */
import { Link, useParams } from 'react-router-dom';
import { findProject } from '@/data/projects';
import { useBackNav } from '@/hooks/useNav';
import AppIcon from '@/components/ui/AppIcon';
import ProjectHeader from './projectDetail/ProjectHeader';
import ProjectBody from './projectDetail/ProjectBody';
import s from './projectDetail/ProjectDetail.module.css';

export default function ProjectDetailView() {
  const { id } = useParams();
  const project = findProject(String(id));
  const goBack = useBackNav();

  return (
    <main className={`${s.detail} section`}>
      <div className="container">
        <button type="button" className={s.back} onClick={goBack}>
          <span className={s.flip}><AppIcon name="arrow" size={16} /></span> Back to projects
        </button>

        {project ? (
          <>
            <ProjectHeader project={project} />
            <ProjectBody project={project} />
          </>
        ) : (
          <div className={`${s.missing} surface`}>
            <h2>Project not found</h2>
            <Link to="/#projects" className="btn btn-primary">Back to projects</Link>
          </div>
        )}
      </div>
    </main>
  );
}
