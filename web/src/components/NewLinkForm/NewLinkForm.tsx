import { type SubmitHandler, useForm } from "react-hook-form"
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
  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.info(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="mb-4"
        label="Link original"
        placeholder="Link original"
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

      <Button className="mt-6" variant="primary" type="submit">
        Salvar link
      </Button>
    </form>
  )
}
