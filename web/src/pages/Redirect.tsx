import { Link } from "react-router-dom"
import Logo from "/images/logo.svg"
import { InfoCard } from "../components/InfoCard/InfoCard"

export const Redirect = () => {
  return (
    <InfoCard img={Logo} title="Redirecionando...">
      <p className="text-md">
        O link será aberto automaticamente em alguns instantes.
      </p>
      <p className="text-md">
        Não foi redirecionado?{" "}
        <Link to="/" className="text-blue-base hover:underline">
          Acesse aqui
        </Link>
      </p>
    </InfoCard>
  )
}
