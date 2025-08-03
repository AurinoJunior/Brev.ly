import { useEffect } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"
import { useCreateNewLink } from "../../hooks/useCreateNewLink"
import { useToast } from "../../hooks/useToast"
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
  const { createLink, error, isLoading } = useCreateNewLink()
  const { showToast } = useToast()

  const onSubmit: SubmitHandler<IFormInput> = data => {
    createLink({
      url: data.originalLink,
      shortURL: data.shortLink,
    })
  }

  useEffect(() => {
    if (!error) return

    showToast({
      message: error.message,
      type: "error",
    })
  }, [error])

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
