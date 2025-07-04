import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', error, label, ...props }, ref) => (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className={cn('input-field', error && 'input-error', className)}
        ref={ref}
        {...props}
      />
      {error && <p className="form-error">{error}</p>}
    </div>
  )
);
Input.displayName = 'Input';
export { Input };
