/** ProjectAnalysis — category donut, tech treemap, complexity bubbles and timeline. */
import { projects } from '@/data/projects';
import ProjectCategoryDonut from '@/components/charts/ProjectCategoryDonut';
import TechStackTreemap from '@/components/charts/TechStackTreemap';
import ProjectComplexityBubble from '@/components/charts/ProjectComplexityBubble';
import AnalysisBlock from './AnalysisBlock';
import ProjectTimeline from './ProjectTimeline';
import s from '../AnalysisView.module.css';

export default function ProjectAnalysis() {
  return (
    <div className={s.group}>
      <h2 className={s.groupTitle}>Project analysis</h2>

      <div className={s.split}>
        <AnalysisBlock
          split
          title="Projects by category"
          sub={`Share of the ${projects.length} shipped projects per category.`}
        >
          <ProjectCategoryDonut size={200} />
        </AnalysisBlock>
        <AnalysisBlock
          split
          title="Tech stack usage"
          sub="Which technologies recur most across all projects."
        >
          <TechStackTreemap limit={10} />
        </AnalysisBlock>
      </div>

      <AnalysisBlock
        title="Project complexity over time"
        sub="Tech-stack size per project, grouped by role/era — bubble size is highlights documented."
      >
        <ProjectComplexityBubble />
      </AnalysisBlock>

      <AnalysisBlock
        title="Project timeline"
        sub="Approximate — grouped by role/period, most recent first."
        card={null}
      >
        <ProjectTimeline />
      </AnalysisBlock>
    </div>
  );
}
