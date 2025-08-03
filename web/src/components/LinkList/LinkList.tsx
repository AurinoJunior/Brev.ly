import { useEffect } from "react"
import { useGetAllLinks } from "../../hooks/useGetAllLinks"
import { useGetExportLinks } from "../../hooks/useGetExportLinks"
import { useToast } from "../../hooks/useToast"
import { Button } from "../ui/Button"
import { Link } from "../ui/Link"
import { EmptyState } from "./EmptyState"

export const LinkList = () => {
  const { links, error } = useGetAllLinks()
  const { exportLinks, data, isLoading } = useGetExportLinks()
  const { showToast } = useToast()

  const emptyState = links?.length === 0 || !!error
  const isDisabledDowloadButton = isLoading || emptyState

  useEffect(() => {
    if (error) {
      showToast({ message: error.message, type: "error" })
      return
    }

    if (data?.csvRemoteURL) {
      const link = document.createElement("a")
      link.href = data.csvRemoteURL
      link.download = "links.csv"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }, [data, error])

  return (
    <div className="w-full max-w-[380px] h-fit bg-white p-6 rounded-lg lg:max-w-[580px]">
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <h2 className="text-lg font-bold">Meus links</h2>
        <Button
          variant="iconButton"
          icon="download"
          onClick={() => exportLinks()}
          disabled={isDisabledDowloadButton}
        >
          Baixar CSV
        </Button>
      </div>

      {emptyState && <EmptyState />}

      {!error &&
        links?.map(link => (
          <Link
            key={link.id}
            id={link.id}
            shortLink={link.shortURL}
            accessCount={link.visits ?? 0}
            originalLink={link.originalURL}
          />
        ))}
    </div>
  )
}
