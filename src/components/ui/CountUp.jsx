/** CountUp — renders a label with its numeric part animated up from zero. */
import { useCountUp } from '@/hooks/useCountUp';

export default function CountUp({ value }) {
  const display = useCountUp(value);
  return <span>{display}</span>;
}
