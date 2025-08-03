import useSWRMutation from "swr/mutation"
import type { ErrorResponse, NewLinkResponse } from "../@types/api"
import { api } from "../service/api"

interface NewLinkPayload {
  url: string
  shortURL: string
}

export const useCreateNewLink = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "create-new-link",
    (_, { arg }: { arg: NewLinkPayload }) => {
      const result = api<NewLinkResponse, NewLinkPayload>("/links", {
        method: "POST",
        body: arg,
      })

      return result
    }
  )

  return {
    createLink: trigger,
    data,
    error: error as ErrorResponse,
    isLoading: isMutating,
  }
}
