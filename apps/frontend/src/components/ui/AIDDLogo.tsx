type AIDDLogoProps = {
  size?: 'sm' | 'default' | 'lg';
  className?: string;
};

const AIDDLogo = ({ size = 'default', className = '' }: AIDDLogoProps) => {
  const sizeClasses = {
    sm: 'logo-sm',
    default: 'logo-default',
    lg: 'logo-lg',
  };

  return (
    <div className={`aidd-logo ${sizeClasses[size]} ${className}`}>
      <span className="logo-text">AIDD</span>
    </div>
  );
};

export { AIDDLogo };
