import { Link as RouterLink } from "react-router-dom"
import Logo from "/images/logo.svg"
import { InfoCard } from "../components/InfoCard/InfoCard"

export const Redirect = () => {
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
