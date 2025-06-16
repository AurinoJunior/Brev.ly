export class LinkAlreadyExists extends Error {
  constructor() {
    super("O Link já existe!")
  }
}
