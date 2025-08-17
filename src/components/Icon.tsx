import React from 'react';

interface IconProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = 20, className = '' }) => {
  return <IconComponent size={size} className={className} />;
};

export default Icon; 