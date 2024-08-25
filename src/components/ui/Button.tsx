import type { ButtonProps } from "../../types/styled/Button";

export const Button = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = '',
  icon,
}: ButtonProps) => {
  const baseStyles = 'flex px-3.5 py-3.5 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-500',
    secondary: 'bg-gray-400 text-white hover:bg-gray-500 focus:ring-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};
