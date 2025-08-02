import useSWR from "swr"
import type { ErrorResponse, ExportLinksResponse } from "../@types/api"
import { api } from "../service/api"

export const useGetAllLinks = () => {
  const { data, error, isLoading } = useSWR("export-links", () =>
    api<ExportLinksResponse[] | ErrorResponse>("/links/export")
  )

  return {
    links: data,
    error,
    isLoading,
  }
}
