import './MarsLogo.css';

interface MarsLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function MarsLogo({ size = 'md' }: MarsLogoProps) {
  return (
    <span className="mars-logo mars-logo--md notranslate" translate="no">
      <span className="mars-logo__ai notranslate" translate="no">AI </span>
      <span className="mars-logo__ma notranslate" translate="no">MA</span>
      <span className="mars-logo__rs notranslate" translate="no">RS</span>
    </span>
  );
}

