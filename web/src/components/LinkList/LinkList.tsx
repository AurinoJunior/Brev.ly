import { Button } from "../ui/Button"
import { EmptyState } from "./EmptyState"

export const LinkList = () => {
  const emptyState = true
  return (
    <div className="w-full max-w-[380px] h-fit bg-white p-6 rounded-lg lg:max-w-[580px]">
      <div className="flex items-center justify-between py-4 border-b border-gray-200 ">
        <h2 className="text-lg font-bold">Meus links</h2>
        <Button variant="iconButton" icon="download">
          Baixar CSV
        </Button>
      </div>
      {emptyState && <EmptyState />}
    </div>
  )
}
