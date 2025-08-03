import { useEffect } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"
import { useCreateNewLink } from "../../hooks/useCreateNewLink"
import { useToast } from "../../hooks/useToast"
import { useLinkStore } from "../../store/useLinksStore"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"

interface IFormInput {
  originalLink: string
  shortLink: string
}

export const NewLinkForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const { createLink, error, isLoading, data } = useCreateNewLink()
  const { showToast } = useToast()
  const { addLink, links } = useLinkStore()

  const onSubmit: SubmitHandler<IFormInput> = data => {
    if (
      links.some(existingLink => existingLink.originalURL === data.originalLink)
    ) {
      return showToast({
        message: "Ops, Link já existe!",
        type: "error",
      })
    }

    createLink({
      url: data.originalLink,
      shortURL: data.shortLink,
    })
  }

  useEffect(() => {
    if (error) {
      showToast({
        message: error.message,
        type: "error",
      })
      return
    }

    if (data) {
      addLink(data)
      return
    }
  }, [error, data])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="mb-4"
        label="Link original"
        placeholder="www.example.com"
        errorMessage={errors.originalLink?.message}
        {...register("originalLink", {
          required: "Link original é obrigatório",
        })}
      />

      <Input
        label="Link encurtado"
        placeholder="Link encurtado"
        errorMessage={errors.shortLink?.message}
        {...register("shortLink", { required: "Link encurtado é obrigatório" })}
      />

      <Button
        className="mt-6"
        variant="primary"
        type="submit"
        disabled={isLoading}
      >
        Salvar link
      </Button>
    </form>
  )
}
