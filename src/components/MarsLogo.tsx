import './MarsLogo.css';

interface MarsLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function MarsLogo({ size = 'md' }: MarsLogoProps) {
  return (
    <span className={`mars-logo mars-logo--${size}`} aria-label="AI MARS">
      <span className="mars-logo__ai">AI </span>
      <span className="mars-logo__ma">MA</span>
      <span className="mars-logo__rs">RS</span>
    </span>
  );
}
