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
    if (links.some(existingLink => existingLink.shortURL === data.shortLink)) {
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
          required: "Informe uma url válida.",
        })}
      />

      <Input
        label="Link encurtado"
        placeholder="exemplo"
        errorMessage={errors.shortLink?.message}
        {...register("shortLink", {
          required:
            "Informe uma url minúscula e sem espaços/caracteres especiais.",
          validate: value => {
            const regex = /^[a-z0-9\-]+$/
            if (value !== value.toLowerCase()) {
              return "A url deve ser minúscula."
            }
            if (/\s/.test(value)) {
              return "A url não pode conter espaços."
            }
            if (!regex.test(value)) {
              return "A url não pode conter caracteres especiais."
            }
            return true
          },
        })}
      />

      <Button
        className="mt-6"
        variant="primary"
        type="submit"
        isLoading={isLoading}
        disabled={isLoading}
      >
        Salvar link
      </Button>
    </form>
  )
}
