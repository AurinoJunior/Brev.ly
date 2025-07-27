import Logo from "/images/full-logo.svg"
import { LinkList } from "../components/LinkList/LinkList"
import { NewLinkForm } from "../components/NewLinkForm/NewLinkForm"

export const Home = () => {
  return (
    <section className="w-full flex flex-col gap-3" id="home">
      <div>
        <div className="w-[100px] mb-6 mx-auto">
          <img src={Logo} alt="Logo Brev.ly" />
        </div>
        <div className="bg-white p-6 rounded-lg w-full max-w-[380px]">
          <h2 className="text-lg font-bold mb-5">Novo link</h2>
          <NewLinkForm />
        </div>
      </div>

      <LinkList />
    </section>
  )
}
