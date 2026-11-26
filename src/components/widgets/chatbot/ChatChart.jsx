/** ChatChart — compact inline chart card inside a bot reply, linking to the full Analysis page. */
import { Link } from 'react-router-dom';
import AppIcon from '@/components/ui/AppIcon';
import SkillRadarChart from '@/components/charts/SkillRadarChart';
import TopSkillsBars from '@/components/charts/TopSkillsBars';
import s from './ChatMessage.module.css';

export default function ChatChart({ kind, onClose }) {
  return (
    <div className={s.chartCard}>
      {kind === 'skills-radar' && <SkillRadarChart size={200} showLabels={false} />}
      {kind === 'top-skills' && <TopSkillsBars limit={5} compact />}
      <Link to="/analysis" className={s.chartLink} onClick={onClose}>
        Open full Analysis <AppIcon name="arrow" size={12} />
      </Link>
    </div>
  );
}
