import {
  Description,
  Field,
  Input as HeadlessInput,
  Label,
} from "@headlessui/react"
import { Icon } from "./Icon"

interface InputProps {
  label: string
  name: string
  placeholder?: string
  errorMessage?: string
}

export const Input = ({
  label,
  name,
  placeholder,
  errorMessage,
}: InputProps) => {
  return (
    <Field className="group">
      <Label
        className="block text-xs text-gray-500 group-focus-within:text-blue-base group-focus-within:font-semibold data-[error='true']:text-danger"
        data-error={!!errorMessage}
      >
        {label}
      </Label>
      <HeadlessInput
        className="w-full mt-2 block text-[14px] p-4 h-[48px] rounded-lg border border-gray-300 focus:border-blue-base focus:border-2 data-[error='true']:border-danger focus-visible:outline-0"
        name={name}
        placeholder={placeholder}
        data-error={!!errorMessage}
      />
      {errorMessage && (
        <Description className="flex items-center gap-2 mt-2 text-[12px] text-gray-500 ">
          <Icon name="warning" size={18} color="red" />
          {errorMessage}
        </Description>
      )}
    </Field>
  )
}
