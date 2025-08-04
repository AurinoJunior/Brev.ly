import { useEffect } from "react"
import Logo from "/images/full-logo.svg"
import { LinkList } from "../components/LinkList/LinkList"
import { NewLinkForm } from "../components/NewLinkForm/NewLinkForm"
import { useGetAllLinks } from "../hooks/useGetAllLinks"
import { useToast } from "../hooks/useToast"
import { useLinkStore } from "../store/useLinksStore"

export const Home = () => {
  const { links, error } = useGetAllLinks()
  const { setLinks } = useLinkStore()
  const { showToast } = useToast()

  useEffect(() => {
    if (error) {
      showToast({ message: error.message, type: "error" })
      return
    }

    if (links) {
      setLinks(links)
    }
  }, [links])

  return (
    <section className="w-full max-w-[380px] lg:max-w-[980px]" id="home">
      <div className="w-[100px] mb-6 mx-auto lg:mr-auto lg:ml-0">
        <img src={Logo} alt="Logo Brev.ly" />
      </div>

      <div className="flex flex-col gap-3 w-full lg:flex-row">
        <div className="bg-white p-6 rounded-lg w-full h-fit lg:max-w-[380px]">
          <h2 className="text-lg font-bold mb-5">Novo link</h2>
          <NewLinkForm />
        </div>

        <LinkList />
      </div>
    </section>
  )
}
