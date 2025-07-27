import { Button as HeadlessButton } from "@headlessui/react"
import type { ButtonHTMLAttributes } from "react"
import { type VariantProps, tv } from "tailwind-variants"
import { Icon, type TIconName } from "./Icon"

const buttonVariants = tv({
  base: "flex items-center justify-center gap-2 p-2 bg-gray-200 h-[32px] rounded-sm text-[12px] text-gray-500 hover:border-1 hover:border-blue-base cursor-pointer disabled:opacity-50 disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:pointer-events-none",
  variants: {
    variant: {
      primary:
        "w-full h-[48px] font-semibold text-[14px] text-white rounded-lg bg-blue-base hover:bg-blue-dark",
      icon: "w-[32px]",
      iconButton: "w-fit",
    },
  },
})

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    icon?: TIconName
    children?: React.ReactNode
  }

export const Button = ({
  className,
  children,
  icon,
  variant,
  ...props
}: TButtonProps) => {
  return (
    <HeadlessButton
      className={buttonVariants({ variant, className })}
      {...props}
    >
      {icon && <Icon name={icon} size={18} color="black" />}
      {children && <>{children}</>}
    </HeadlessButton>
  )
}
