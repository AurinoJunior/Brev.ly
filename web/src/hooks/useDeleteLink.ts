import useSWRMutation from "swr/mutation"
import type { DeleteLinkResponse } from "../@types/api"
import { api } from "../service/api"

interface DeleteLinkPayload {
  id: string
}

export const useDeleteLink = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "delete-link",
    async (_, { arg }: { arg: DeleteLinkPayload }) => {
      const result = await api<DeleteLinkResponse, DeleteLinkPayload>(
        "/links",
        {
          method: "DELETE",
          body: arg,
        }
      )

      return result
    }
  )

  return {
    deleteLink: trigger,
    isSuccess: !!data,
    error,
    isLoading: isMutating,
  }
}
