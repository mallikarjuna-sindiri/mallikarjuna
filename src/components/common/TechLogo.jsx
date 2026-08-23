import { useState } from 'react';

export default function TechLogo({ src, alt, className = 'h-4 w-4 object-contain' }) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) return null;

  return (
    <img
      src={src}
      alt={alt || ''}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
