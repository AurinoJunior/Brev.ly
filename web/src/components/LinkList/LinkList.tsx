import { useDeleteLink } from "../../hooks/useDeleteLink"
import { useGetAllLinks } from "../../hooks/useGetAllLinks"
import { Button } from "../ui/Button"
import { Link } from "../ui/Link"
import { EmptyState } from "./EmptyState"

export const LinkList = () => {
  const { links, error } = useGetAllLinks()
  const { deleteLink } = useDeleteLink()

  const emptyState = links?.length === 0 || error
  return (
    <div className="w-full max-w-[380px] h-fit bg-white p-6 rounded-lg lg:max-w-[580px]">
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <h2 className="text-lg font-bold">Meus links</h2>
        <Button variant="iconButton" icon="download">
          Baixar CSV
        </Button>
      </div>

      {emptyState && <EmptyState />}

      {!error &&
        links?.map(link => (
          <Link
            key={link.id}
            shortLink={link.shortURL}
            accessCount={link.visits ?? 0}
            originalLink={link.originalURL}
            handleDeleteLink={() => deleteLink({ id: link.id })}
          />
        ))}
    </div>
  )
}
