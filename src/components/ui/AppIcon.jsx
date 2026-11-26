/** AppIcon — inline SVG icon set (stroke-based, currentColor). */
import { iconPaths } from './iconPaths';

export default function AppIcon({ name, size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={iconPaths[name] ?? ''} />
    </svg>
  );
}
