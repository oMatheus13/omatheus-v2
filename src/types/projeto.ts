export interface Projeto {
  id: string
  slug: string
  nome: string
  tagline: string
  descricao: string
  status: 'ativo' | 'construindo' | 'pausado'
  url?: string
  github?: string
  logo?: string
  cor: string
  tags: string[]
}
