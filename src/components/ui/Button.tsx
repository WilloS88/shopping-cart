import type { ButtonProps } from "../../types/styled/Button";

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = '',
  icon,
}) => {
  const baseStyles = 'flex px-3.5 py-3.5 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>} {/* Render icon if provided */}
      {label}
    </button>
  );
};
