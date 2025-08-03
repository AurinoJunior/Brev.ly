import { useEffect } from "react"
import { Link as RouterLink } from "react-router-dom"
import { useDeleteLink } from "../../hooks/useDeleteLink"
import { useToast } from "../../hooks/useToast"
import { useLinkStore } from "../../store/useLinksStore"
import { Button } from "./Button"

interface LinkProps {
  shortLink: string
  originalLink: string
  accessCount: number
  id: string
}

const APP_URL = import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173"

export const Link = ({
  id,
  shortLink,
  originalLink,
  accessCount,
}: LinkProps) => {
  const { showToast } = useToast()
  const { deleteLink, isSuccess: isDeleted } = useDeleteLink()
  const { removeLink } = useLinkStore()

  const handleCopyShortLink = () => {
    showToast({
      message: "URL copiada!",
      type: "info",
    })
    navigator.clipboard.writeText(shortLink)
  }

  useEffect(() => {
    if (isDeleted) {
      removeLink(id)
      showToast({ message: "Link deletado com sucesso!", type: "info" })
      return
    }
  }, [isDeleted])

  return (
    <div className="flex items-center justify-between py-4 gap-4 border-b border-gray-200 last:border-b-0">
      <div className="max-w-[157px]">
        <RouterLink to={`/${shortLink}`} className="block">
          <h3
            className="text-md font-semibold text-blue-base truncate"
            title={`${APP_URL}/${shortLink}`}
          >
            {`${APP_URL}/${shortLink}`}
          </h3>
        </RouterLink>

        <p className="text-sm text-gray-500 truncate" title={originalLink}>
          {originalLink}
        </p>
      </div>

      <div className="flex items-center gap-1">
        <p className="text-sm text-gray-500 mr-4">{accessCount} acessos</p>
        <Button variant="icon" icon="copy" onClick={handleCopyShortLink} />
        <Button
          variant="icon"
          icon="trash"
          onClick={() => deleteLink({ id })}
        />
      </div>
    </div>
  )
}
