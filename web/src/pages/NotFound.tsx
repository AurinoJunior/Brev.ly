import { Link } from "react-router-dom"
import Image from "/images/not-found.svg"
import { InfoCard } from "../components/InfoCard/InfoCard"

export const NotFound = () => {
  return (
    <InfoCard img={Image} title="Link não encontrado">
      <p className="text-md">
        O link que você está tentando acessar não existe, foi removido ou é uma
        URL inválida. Saiba mais em{" "}
        <Link to="/" className="text-blue-base hover:underline">
          brev.ly.
        </Link>
      </p>
    </InfoCard>
  )
}
