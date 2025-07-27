import { Button } from "../ui/Button"

interface LinkProps {
  shortLink: string
  originalLink: string
  accessCount: number
}

export const Link = ({ shortLink, originalLink, accessCount }: LinkProps) => {
  return (
    <div className="flex items-center justify-between py-4 gap-4">
      <div className="max-w-[157px]">
        <h3 className="text-md font-semibold text-blue-base truncate">
          {shortLink}
        </h3>
        <p className="text-sm text-gray-500 truncate">{originalLink}</p>
      </div>

      <p className="text-sm text-gray-500">{accessCount} acessos</p>

      <div className="flex items-center gap-1">
        <Button variant="icon" icon="copy" />
        <Button variant="icon" icon="trash" />
      </div>
    </div>
  )
}
