import { Link as RouterLink } from "react-router-dom"
import { Button } from "./Button"

interface LinkProps {
  shortLink: string
  originalLink: string
  accessCount: number
  handleDeleteLink: () => void
}

export const Link = ({
  shortLink,
  originalLink,
  accessCount,
  handleDeleteLink,
}: LinkProps) => {
  const handleCopyShortLink = () => {
    navigator.clipboard.writeText(shortLink)
  }

  return (
    <div className="flex items-center justify-between py-4 gap-4 border-b border-gray-200 last:border-b-0">
      <div className="max-w-[157px]">
        <RouterLink to={`/${shortLink}`} className="block">
          <h3
            className="text-md font-semibold text-blue-base truncate"
            title={shortLink}
          >
            {shortLink}
          </h3>
        </RouterLink>

        <p className="text-sm text-gray-500 truncate" title={originalLink}>
          {originalLink}
        </p>
      </div>

      <div className="flex items-center gap-1">
        <p className="text-sm text-gray-500 mr-4">{accessCount} acessos</p>
        <Button variant="icon" icon="copy" onClick={handleCopyShortLink} />
        <Button variant="icon" icon="trash" onClick={handleDeleteLink} />
      </div>
    </div>
  )
}
