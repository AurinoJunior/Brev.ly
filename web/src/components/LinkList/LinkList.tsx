import { Button } from "../ui/Button"
import { Icon } from "../ui/Icon"

export const LinkList = () => {
  const emptyState = true
  return (
    <div className="bg-white p-6 rounded-lg w-full max-w-[380px]">
      <div className="flex items-center justify-between py-4 border-b border-gray-200 ">
        <h2 className="text-lg font-bold">Meus links</h2>
        <Button variant="iconButton" icon="download">
          Baixar CSV
        </Button>
      </div>
      {emptyState && (
        <div className="mt-8 mb-6 text-center">
          <Icon className="mx-auto mb-3 text-gray-400" name="link" size={32} />
          <p className="text-xs text-gray-500">
            AINDA NÃO EXISTEM LINKS CADASTRADOS
          </p>
        </div>
      )}
    </div>
  )
}
