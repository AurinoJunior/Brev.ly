import { Icon } from "../ui/Icon"

export const EmptyState = () => {
  return (
    <div className="mt-8 mb-6 text-center">
      <Icon className="mx-auto mb-3 text-gray-400" name="link" size={32} />
      <p className="text-xs text-gray-500">
        AINDA NÃO EXISTEM LINKS CADASTRADOS
      </p>
    </div>
  )
}
