import type { Projeto } from '@/types/projeto'

export const projetos: Projeto[] = [
  {
    id: 'umoya',
    slug: 'umoya',
    nome: 'Umoya Pre-Moldados',
    tagline: 'Construindo Garanhuns com as proprias maos.',
    descricao:
      'Empresa de pre-moldados em Garanhuns-PE. Vigota, pingadeira e estrutura para quem constroi de verdade.',
    status: 'ativo',
    url: 'https://umoya.omatheus.com',
    cor: '#b97d52',
    tags: ['construcao civil', 'pre-moldados', 'Garanhuns', 'PE']
  },
  {
    id: 'bussola-dbv',
    slug: 'bussola-dbv',
    nome: 'Bussola DBV',
    tagline: 'Navegando com proposito.',
    descricao: 'App para jovens do DBV. Em construcao.',
    status: 'construindo',
    url: 'https://dbv.omatheus.com',
    cor: '#3d4f3c',
    tags: ['app', 'DBV', 'jovens']
  }
]
