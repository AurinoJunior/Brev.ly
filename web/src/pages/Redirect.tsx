import { useEffect, useRef } from "react"
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom"
import Logo from "/images/logo.svg"
import { InfoCard } from "../components/InfoCard/InfoCard"
import { useGetOriginalLink } from "../hooks/useGetOriginalLink"
import { useIncrementAccess } from "../hooks/useIncrementAccess"

export const Redirect = () => {
  const { shortURL } = useParams()
  const navigate = useNavigate()

  const { data, error } = useGetOriginalLink({
    shortURL: shortURL || "",
  })
  const { incrementAccess, isSuccess } = useIncrementAccess()
  const hasIncremented = useRef(false)

  useEffect(() => {
    if (error) {
      navigate("/not-found")
      return
    }

    if (data && !hasIncremented.current) {
      incrementAccess({ id: data.id })
      hasIncremented.current = true
    }

    if (isSuccess && data) {
      window.location.href = data.originalURL
    }
  }, [incrementAccess, data, isSuccess, navigate, error])

  return (
    <InfoCard>
      <div className="w-[48px] h-[48px]">
        <img className="w-full" src={Logo} alt="Redirecionando" />
      </div>
      <h3 className="text-xl font-bold text-gray-600">Redirecionando...</h3>

      <div className="text-md text-center">
        <p>O link será aberto automaticamente em alguns instantes.</p>
        <p>
          Não foi redirecionado?{" "}
          <RouterLink to="/" className="text-blue-base hover:underline">
            Acesse aqui
          </RouterLink>
        </p>
      </div>
    </InfoCard>
  )
}
