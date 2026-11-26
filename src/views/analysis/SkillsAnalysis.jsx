/** SkillsAnalysis — radar, top skills, histogram, tornado and box plot. */
import SkillRadarChart from '@/components/charts/SkillRadarChart';
import TopSkillsBars from '@/components/charts/TopSkillsBars';
import SkillHistogram from '@/components/charts/SkillHistogram';
import SkillBoxPlot from '@/components/charts/SkillBoxPlot';
import CategoryTornado from '@/components/charts/CategoryTornado';
import AnalysisBlock from './AnalysisBlock';
import s from '../AnalysisView.module.css';

export default function SkillsAnalysis() {
  return (
    <div className={s.group}>
      <h2 className={s.groupTitle}>Skills analysis</h2>

      <AnalysisBlock
        title="Skill strength by category"
        sub="A holistic view across all six skill areas — the ranked per-skill list is below."
        card="radar"
      >
        <SkillRadarChart size={340} />
      </AnalysisBlock>

      {/* No reveal wrapper — TopSkillsBars owns its own scroll-reveal (also used in the chatbot). */}
      <AnalysisBlock title="Top individual skills" sub="Highest-rated skills across every category." card={null}>
        <TopSkillsBars limit={10} />
      </AnalysisBlock>

      <div className={s.split}>
        <AnalysisBlock
          split
          title="Skill level distribution"
          sub="How many individual skills fall in each proficiency band."
        >
          <SkillHistogram />
        </AnalysisBlock>
        <AnalysisBlock
          split
          title="Category vs. overall average"
          sub="Which categories run above or below the average across all skills."
        >
          <CategoryTornado />
        </AnalysisBlock>
      </div>

      <AnalysisBlock
        title="Skill spread by category"
        sub="The radar shows the average per category — this shows the range within it."
      >
        <SkillBoxPlot />
      </AnalysisBlock>
    </div>
  );
}
