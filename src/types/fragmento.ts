export interface Fragmento {
  id: string
  slug: string
  titulo: string
  subtitulo?: string
  ano: number
  categoria:
    | 'design'
    | 'identidade'
    | 'produto'
    | 'texto'
    | 'codigo'
    | 'outro'
    | 'editorial'
  descricao: string
  thumbnail: string
  destaque?: boolean
  tema: {
    bgColor: string
    textColor: string
    accentColor: string
  }
  links?: {
    live?: string
    github?: string
  }
}
