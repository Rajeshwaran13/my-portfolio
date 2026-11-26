/** AnalysisView — self-report dashboard: KPIs, skill charts, project charts, timeline (/analysis). */
import { useMemo } from 'react';
import { useBackNav } from '@/hooks/useNav';
import { reveal } from '@/hooks/reveal';
import AppIcon from '@/components/ui/AppIcon';
import CountUp from '@/components/ui/CountUp';
import { buildKpis } from './analysis/analysisStats';
import SkillsAnalysis from './analysis/SkillsAnalysis';
import ProjectAnalysis from './analysis/ProjectAnalysis';
import s from './AnalysisView.module.css';

export default function AnalysisView() {
  const goBack = useBackNav();
  const kpis = useMemo(buildKpis, []);

  return (
    <main className={`${s.analysis} section`}>
      <div className="container">
        <button type="button" className={s.back} onClick={goBack}>
          <span className={s.flip}>
            <AppIcon name="arrow" size={16} />
          </span>
          Back
        </button>

        <p className="eyebrow">Analysis</p>
        <h1 className={s.title}>Skills &amp; project timeline</h1>
        <p className={s.subtitle}>
          A self-report on my full-stack work for a Smart City IoT platform: where my strengths
          concentrate, and roughly when each project happened.
        </p>

        <section className={s.kpis}>
          {kpis.map((k, i) => (
            <div key={k.label} className={`${s.kpi} surface`} ref={reveal(i * 60)}>
              <span className={s.kpiValue}>
                <CountUp value={k.value} />
              </span>
              <span className={s.kpiLabel}>{k.label}</span>
            </div>
          ))}
        </section>

        <SkillsAnalysis />
        <ProjectAnalysis />
      </div>
    </main>
  );
}
