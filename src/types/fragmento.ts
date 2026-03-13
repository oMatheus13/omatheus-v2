export interface Fragmento {
  id: string
  slug: string
  titulo: string
  subtitulo?: string
  ano: number
  categoria: 'design' | 'identidade' | 'produto' | 'texto' | 'codigo' | 'outro'
  descricao: string
  thumbnail: string
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
