/**
 * SkillsSection — "pipeline explorer": skill groups as stages on a flowing
 * pipeline (left) driving one large detail panel (right). Auto-advances until
 * the visitor picks a stage; a concepts marquee runs underneath.
 */
import { useState } from 'react';
import { skillGroups } from '@/data/skills';
import { reveal } from '@/hooks/reveal';
import StageList from './skills/StageList';
import StagePanel from './skills/StagePanel';
import { useAutoCycle } from './skills/useAutoCycle';
import s from './skills/Skills.module.css';

const CYCLE_MS = 5000;

export default function SkillsSection() {
  const [hover, setHover] = useState(false);
  const { index, select, auto } = useAutoCycle(skillGroups.length, CYCLE_MS, hover);

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="eyebrow" ref={reveal()}>Skills</p>
        <h2 className="section-title" ref={reveal()}>My stack, stage by stage</h2>
        <p className="section-sub" ref={reveal()}>
          Like the data pipelines I build — from the React UI down to Spring Boot services,
          Kafka / NiFi streams, storage and the CI/CD gates that ship it.
        </p>

        <div
          className={s.explorer}
          ref={reveal(80)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <StageList
            groups={skillGroups}
            active={index}
            onSelect={select}
            auto={auto && !hover}
            cycleMs={CYCLE_MS}
          />
          <StagePanel key={index} group={skillGroups[index]} index={index} total={skillGroups.length} />
        </div>
      </div>
    </section>
  );
}
