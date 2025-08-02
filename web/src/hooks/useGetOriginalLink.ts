import useSWR from "swr"
import type { ErrorResponse, LinkResponse } from "../@types/api"
import { api } from "../service/api"

export const useGetOriginalLink = () => {
  const { data, error, isLoading } = useSWR("original-links", () =>
    api<LinkResponse[] | ErrorResponse>("/original-links")
  )

  return {
    links: data,
    error,
    isLoading,
  }
}
