import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const Card = ({ className = '', children, ...props }: CardProps) => (
  <div className={cn('card card-padding', className)} {...props}>{children}</div>
);

const CardHeader = ({ className = '', children, ...props }: CardProps) => (
  <div className={cn('card-header', className)} {...props}>{children}</div>
);

const CardTitle = ({ className = '', children, ...props }: CardProps) => (
  <h3 className={cn('card-title', className)} {...props}>{children}</h3>
);

const CardContent = ({ className = '', children, ...props }: CardProps) => (
  <div className={cn('card-content', className)} {...props}>{children}</div>
);

export { Card, CardContent, CardHeader, CardTitle };
