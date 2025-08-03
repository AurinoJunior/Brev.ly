import useSWR from "swr"
import type { ErrorResponse, LinkResponse } from "../@types/api"
import { api } from "../service/api"

export const useGetOriginalLink = ({ shortURL }: { shortURL: string }) => {
  const { data, error, isLoading } = useSWR("original-link", () =>
    api<LinkResponse>("/original-link", {
      queryParams: { shortURL },
    })
  )

  return {
    data,
    error: error as ErrorResponse,
    isLoading,
  }
}
