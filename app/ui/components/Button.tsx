import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
 'px-4 py-1 rounded text-white',
  {
    variants: {
      variant: {
        default: 'bg-gray-500',
        secondary: 'bg-yellow-500',
      },
      size: {
        default: 'px-4 py-2 text-base',
        small: 'px-2 py-1 text-sm',
        large: 'px-6 py-3 text-lg',
      }
        
    },
    defaultVariants: {
      variant: 'default',
      size:'default',
    },
  }
);

interface ButtonProps extends 
  VariantProps<typeof buttonVariants>,
  React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
    variant, size, children, ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size })}
      {...props}
    >
      {children}
    </button>
  );
}