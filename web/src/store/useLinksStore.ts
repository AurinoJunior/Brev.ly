import { create } from "zustand"
import type { LinkResponse } from "../@types/api"

export interface LinksStore {
  links: LinkResponse[]
  addLink: (link: LinkResponse) => void
  setLinks: (links: LinkResponse[]) => void
  removeLink: (id: string) => void
}

export const useLinkStore = create<LinksStore>(set => ({
  links: [],
  addLink: link =>
    set(state => {
      if (state.links.some(existingLink => existingLink.id === link.id)) {
        return state
      }
      return { links: [...state.links, link] }
    }),
  setLinks: links => {
    set({ links })
  },
  removeLink: id =>
    set(state => ({ links: state.links.filter(link => link.id !== id) })),
}))
