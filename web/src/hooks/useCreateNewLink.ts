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
    (_, { arg }: { arg: NewLinkPayload }) =>
      api<NewLinkResponse | ErrorResponse, NewLinkPayload>("/links", {
        method: "POST",
        body: arg,
      })
  )

  return { createLink: trigger, data, error, isLoading: isMutating }
}
