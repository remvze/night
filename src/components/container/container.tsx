import { cn } from '@/helpers/styles';

import styles from './container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  wide?: boolean;
}

export function Container({ children, fullWidth, wide }: ContainerProps) {
  return (
    <div
      className={cn(
        styles.container,
        wide && styles.wide,
        fullWidth && styles.fullwidth,
      )}
    >
      {children}
    </div>
  );
}
