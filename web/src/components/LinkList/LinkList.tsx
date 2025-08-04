import { useEffect } from "react"
import { useGetExportLinks } from "../../hooks/useGetExportLinks"
import { useToast } from "../../hooks/useToast"
import { useLinkStore } from "../../store/useLinksStore"
import { Button } from "../ui/Button"
import { Link } from "../ui/Link"
import { EmptyState } from "./EmptyState"
import { LoadingState } from "./LoadingState"

interface LinkListProps {
  isLinksLoading?: boolean
}

export const LinkList = ({ isLinksLoading }: LinkListProps) => {
  const { exportLinks, data, isLoading, error } = useGetExportLinks()
  const { showToast } = useToast()
  const { links } = useLinkStore()

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
    <div className="w-full h-fit bg-white p-6 rounded-lg max-h-[300px] overflow-y-auto lg:max-w-[580px] lg:max-h-[600px]">
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <h2 className="text-lg font-bold">Meus links</h2>
        <Button
          className="w-[104px]"
          icon="download"
          isLoading={isLoading}
          onClick={() => exportLinks()}
          disabled={isDisabledDowloadButton}
        >
          Baixar CSV
        </Button>
      </div>

      {isLinksLoading && <LoadingState />}
      {emptyState && !isLinksLoading && <EmptyState />}

      {links?.map(link => (
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
