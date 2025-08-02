import useSWRMutation from "swr/mutation"
import type { ErrorResponse } from "../@types/api"
import { api } from "../service/api"

interface DeleteLinkPayload {
  id: string
}

export const useDeleteLink = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "delete-link",
    (_, { arg }: { arg: DeleteLinkPayload }) =>
      api<ErrorResponse | undefined, DeleteLinkPayload>("/links", {
        method: "DELETE",
        body: arg,
      })
  )

  return { createLink: trigger, data, error, isLoading: isMutating }
}
