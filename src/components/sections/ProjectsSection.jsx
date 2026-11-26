/**
 * ProjectsSection — the two products I built (cards), followed by the key
 * contributions delivered inside them.
 */
import { projects } from '@/data/projects';
import ProjectCard from '@/components/widgets/ProjectCard';
import { reveal } from '@/hooks/reveal';
import Contributions from './projects/Contributions';
import s from './ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow" ref={reveal()}>Projects</p>
        <h2 className="section-title" ref={reveal()}>Selected work</h2>
        <p className="section-sub" ref={reveal()}>
          Two products on a Smart City IoT platform — a low-code Apache NiFi pipeline builder and a
          real-time, ML-driven Rule Engine.
        </p>

        <div className={s.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} revealDelay={i * 90} />
          ))}
        </div>

        <Contributions />
      </div>
    </section>
  );
}
