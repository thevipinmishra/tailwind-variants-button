import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: ["inline-flex items-center justify-center rounded-md gap-2"],
  variants: {
    variant: {
        filled: ['bg-blue-600 text-white', 'hover:bg-blue-700'],
        outlined: ['border border-blue-600 bg-white', 'hover:bg-blue-50']
    },
    size: {
        sm: ['h-8 px-3 py-2'],
        md: ['h-10 px-4 py-3'],
        lg: ['h-12 px-6 py-4']
    },
    fullWidth: {
        true: ['w-full']
    }
  },
  defaultVariants: {
    variant: 'filled',
    size: 'md',
    fullWidth: false
  }
});

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {

}

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const { className, variant, size, fullWidth,  ...rest } = props;
  return (
    <button
      ref={ref}
      className={buttonVariants({
        className,
        variant,
        size,
        fullWidth
      })}
      {...rest}
    />
  );
});
