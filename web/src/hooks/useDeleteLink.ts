import { mutate } from "swr"
import useSWRMutation from "swr/mutation"
import { api } from "../service/api"

interface DeleteLinkPayload {
  id: string
}

export const useDeleteLink = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "delete-link",
    async (_, { arg }: { arg: DeleteLinkPayload }) => {
      const result = await api<DeleteLinkPayload>("/links", {
        method: "DELETE",
        body: arg,
      })

      mutate("get-all-links")
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
