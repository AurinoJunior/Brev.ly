import useSWRMutation from "swr/mutation"
import type { ErrorResponse, IncrementAccessResponse } from "../@types/api"
import { api } from "../service/api"

interface IncrementAccessPayload {
  id: string
}

export const useIncrementAccess = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "increment-access",
    (_, { arg }: { arg: IncrementAccessPayload }) =>
      api<IncrementAccessResponse, IncrementAccessPayload>("/increment", {
        method: "POST",
        body: arg,
      })
  )

  return {
    createLink: trigger,
    data,
    error: error as ErrorResponse,
    isLoading: isMutating,
  }
}
