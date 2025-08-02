export interface ErrorResponse {
  message: string
}

export interface LinkResponse {
  id: string
  shortURL: string
  originalURL: string
  visits?: 0
}

export interface NewLinkResponse {
  id: string
  shortURL: string
  originalURL: string
}

export interface IncrementAccessResponse {
  id: string
  visits: number
}

export interface ExportLinksResponse {
  csvRemoteURL: string
}
