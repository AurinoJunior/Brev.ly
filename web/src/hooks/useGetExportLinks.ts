import useSWRMutation from "swr/mutation"
import type { ExportLinksResponse } from "../@types/api"
import { api } from "../service/api"

export const useGetExportLinks = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "export-links",
    () =>
      api<ExportLinksResponse>("/links/export", {
        method: "POST",
        body: JSON.stringify({}),
      })
  )

  return { exportLinks: trigger, data, error, isLoading: isMutating }
}
