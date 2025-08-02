import useSWR from "swr"
import type { ErrorResponse, LinkResponse } from "../@types/api"
import { api } from "../service/api"

export const useGetAllLinks = () => {
  const { data, error, isLoading } = useSWR("get-all-links", () =>
    api<LinkResponse[] | ErrorResponse>("/links")
  )

  return {
    links: data,
    error,
    isLoading,
  }
}
