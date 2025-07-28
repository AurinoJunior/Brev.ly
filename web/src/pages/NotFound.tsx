import { Link } from "react-router-dom"
import Image from "/images/not-found.svg"
import { InfoCard } from "../components/InfoCard/InfoCard"

export const NotFound = () => {
  return (
    <InfoCard>
      <div className="w-[164px] h-[72px] lg:w-[194px] lg:h-[85px]">
        <img className="w-full" src={Image} alt="Link não encontrado" />
      </div>
      <h3 className="text-xl font-bold text-gray-600">Link não encontrado</h3>
      <p className="text-center text-md">
        O link que você está tentando acessar não existe, foi removido ou é uma
        URL inválida. Saiba mais em{" "}
        <Link to="/" className="text-blue-base hover:underline">
          brev.ly.
        </Link>
      </p>
    </InfoCard>
  )
}
